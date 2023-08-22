import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios 추가
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import styled from 'styled-components';
import { useGlobalStateContext } from '../../Component_GlobalState/GlobalStateContent';
import MusicSpectrum from '../Component_Music_Spectrum/MusicSpectrumPlay';
import LikeExpressBtn from '../../Component_Like/LikeExpressParent';

const SongPlayer = styled.div`
  color: white;
  display: flex; 
  flex-direction: row;
  align-items: center;
  background-position: center;
  background-color: rgba(0, 0, 0, 0); // 배경 이미지 투명도 조절
  width: 1810px;
  padding: 10px;
  margin: 10px;
  height: 100px;
  border: 2px solid black;
`;

const SongMainTitle = styled.div` // 제목
  display: flex;
  align-items: center;
`;

const SongTitle = styled.h3` // 제목 
  font-size: 18px;
  margin-bottom: 10px;
`;

const SongImg = styled.img` // 노래 이미지
  width: 30px;
  height: 40px;
  margin-left: 10px;
`;

const StyledButton = styled.button` // 재생 버튼
  padding: 10px 30px;
  margin: 20px;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`

const Spectrum = styled.div`
  width: 1000px;
`;

const AppSongPlayList = () => {
  const [audioData, setAudioData] = useState([]); // 모든 노래 리스트
  const { setTrackIndex, playing, setPlaying } = useGlobalStateContext(); // GlobalStateProvider로부터 trackIndex 가져오기

  useEffect(() => {
    axios.get('/api/songs') // API 엔드포인트 주소
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
    setPlaying(!playing); // playing 초기값 false, 재생 상태
  };

  return (
    <div>
      {audioLists.map((song, index) => (
        <SongPlayer key={song.name}>
          <SongMainTitle>
            <SongTitle> {song.name} / {song.singer} </SongTitle>
            <SongImg src={song.cover} alt={song.name} />
          </SongMainTitle>
          <StyledButton onClick={() => {playSelectedTrack(index)}}>Play</StyledButton>
          <div>
            <LikeExpressBtn/>
          </div>
          <div>
            <Spectrum>
              <MusicSpectrum song={song}/>
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
    </div>
  );
}

export default AppSongPlayList;