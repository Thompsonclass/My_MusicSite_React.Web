import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios 추가
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import styled from 'styled-components';
import Down from './Down.jpg';
import { useGlobalStateContext } from '../../Component_GlobalState/GlobalStateContent';
import MusicSpectrum from '../Component_Music_Spectrum/MusicSpectrumPlay';
import LikeExpressBtn from '../../Component_LikeButton/LikeExpressParent';

const SongPlayerContent = styled.div` /* 전체 배경 */
  display: flex;
  flex-direction: column; /* 세로 정렬*/
  margin-left: 10px;
  margin-top: 20px;
`;

const SongTitle = styled.h3`
  font-size: 20px;
`;

const SongImg = styled.img`
  width: 40px;
  height: 50px;
`;

const StyledButton = styled.button`
  padding: 10px 30px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

const Spectrum = styled.div`
  width: 80em;
`;

const Table = styled.table`
  width: 116em; /* 플레이어 테두리 가로 길이 */
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  background-color: #f2f2f2; /* 배경색 설정 */
  border: 2px solid black;
  height: 10em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* 그림자 효과 추가 */
  margin-bottom: 10px; /* 하단 여백 추가 */
  background-color: #999999;
`;

const TableCell = styled.td`
  padding: 10px;
`;

const StyledBtn = styled.div`
  display: flex;
  flex-direction: row;
`
const LikeBtn = styled.div`
  margin-left: 30px;
`

const StyledDownButton = styled.img`
  width: 2em;
`;

const AppSongPlayList = () => {
  const [audioData, setAudioData] = useState([]); // 모든 노래 리스트
  const { setTrackIndex, playing, setPlaying } = useGlobalStateContext(); // GlobalStateProvider로부터 trackIndex 가져오기

  useEffect(() => {
    axios.get("http://localhost:3000/main/Music_player") // API 엔드포인트 주소
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

  const downSelectedTrack = (musicSrc) => {
    const link = document.createElement('a');   //  <a> 요소 생성
    link.href = musicSrc;
    document.body.appendChild(link); // <a> 요소를 문서의 body에 추가, 하나의 요소를 다른 요소 안에 넣는 역할
    link.click();
    document.body.removeChild(link); // 다운로드가 시작되었으므로 <a> 요소를 body에서 제거
  };

  return (
    <SongPlayerContent>
      <Table>
        <tbody>
          {audioLists.map((song, index) => (
            <TableRow key={index}>
              <TableCell>
                <SongTitle><p>{song.name} /</p><p>{song.singer}</p></SongTitle> {/* 제목 */}
              </TableCell>
              <TableCell>
                <SongImg src={song.cover} alt={song.name} />
              </TableCell>
              <TableCell>
                <StyledBtn>
                  <StyledButton onClick={() => playSelectedTrack(index)}>Play</StyledButton> {/* 재생 버튼*/}
                  <div onClick={() => downSelectedTrack(song.musicSrc)}>
                    <StyledDownButton src={Down} alt="Download" /> {/* 다운 버튼*/}
                  </div>
                  <LikeBtn>
                    <LikeExpressBtn /> {/* 좋아요 버튼 */}
                  </LikeBtn>
                </StyledBtn>
              </TableCell>
              <TableCell>
                <Spectrum>
                  <MusicSpectrum song={song} />
                </Spectrum>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
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