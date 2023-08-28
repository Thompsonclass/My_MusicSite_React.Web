import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios 추가
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import styled from 'styled-components';
import { useGlobalStateContext } from '../../Component_GlobalState/GlobalStateContent';
import MusicSpectrum from '../Component_Music_Spectrum/MusicSpectrumPlay';
import LikeExpressBtn from '../../Component_LikeButton/LikeExpressParent';

const SongPlayerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 중앙 정렬 */
  padding: 10px; /* 간격 추가 */
`;

const SongPlayer = styled.div`
  background-color: rgba(0, 0, 0, 0); 
  width: 98%;
  height: 115px;
  display: flex;
  align-items: center; /* 수평 중앙 정렬 */
  margin: 10px 0; /* 간격 추가 */
  border: 2px solid black;
`;

const SongTitle = styled.h3`
  font-size: 25px;
  color: white;
  margin-left: 10px; /* 왼쪽 간격 추가 */
`;

const SongImg = styled.img`
  width: 40px;
  height: 50px;
  margin: 15px;
`;

const StyledButton = styled.button`
  padding: 10px 30px;
  margin: 15px;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

const Spectrum = styled.div`
  width: 900px;
`;

const AppSongPlayList = () => {
  const [audioData, setAudioData] = useState([]); // 모든 노래 리스트
  const { setTrackIndex, playing, setPlaying } = useGlobalStateContext(); // GlobalStateProvider로부터 trackIndex 가져오기

  useEffect(() => {
    axios.get("http://localhost:3000/api/songs") // API 엔드포인트 주소
      .then((response) => { 
        setAudioData(response.data); // 서버에서 받아온 데이터로 상태 업데이트
      })
      .catch((error) => { //에러시 알림
        console.error(error); // 에러 메시지를 콘솔에 출력
      });
  }, []);

  console.log(audioData); // 노래 리스트를 제대로 불러왔는지 확인

  const audioLists = audioData.map((song, index) => ({
    name: song.name, // 제목
    singer: song.singer, // 가수
    cover: song.cover, // 사진
    musicSrc: song.musicSrc, // 노래 데이터
    index: index, // 노래의 index
  }));

  const playSelectedTrack = (index) => {
    setTrackIndex(index); // 해당 노래 위치, 초기값 0
    setPlaying(!playing); // playing 초기값 true, 재생 상태
  };

  return (
    <SongPlayerContent>
      {audioLists.map((song, index) => (
          <SongPlayer key={index}>
            <SongTitle><p>{song.name} /</p><p>{song.singer}</p></SongTitle>
            <SongImg src={song.cover} alt={song.name} />
            <StyledButton onClick={() => playSelectedTrack(index)}>Play</StyledButton> {/* 재생 버튼 */}
            <div>
              <LikeExpressBtn /> {/* 좋아요 버튼 */}
            </div>
            <div>
              <Spectrum>
                <MusicSpectrum song={song} /> {/* EQ 구현 */}
              </Spectrum>
            </div>
            </SongPlayer>
        ))}
      <ReactJkMusicPlayer
        audioLists={audioLists}
        mode="full"
        showMiniModeCover={false}
        autoPlay={false}
      />
    </SongPlayerContent>
  );
};

export default AppSongPlayList;