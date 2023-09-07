import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import styled from 'styled-components';
import { useGlobalStateContext } from '../../Component_GlobalState/GlobalStateContent';
import MusicSpectrum from '../Component_Music_Spectrum/MusicSpectrumPlay';
import GetAppIcon from '@material-ui/icons/GetApp';

const SongPlayerContent = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 0 20px;
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
  width: 115em;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  background-color: #f2f2f2;
  border: 2px solid black;
  height: 10em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  margin-bottom: 10px;
  background-color: #999999;
`;

const TableCell = styled.td`
  padding: 10px;
`;

const StyledBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AppSongPlayList = () => {
  const [audioData, setAudioData] = useState([]); // 모든 노래 리스트
  const { setTrackIndex, playing, setPlaying } = useGlobalStateContext(); // GlobalStateProvider로부터 trackIndex 가져오기

  useEffect(() => {
    axios.get("http://localhost:3000/main/Music_player") // API 엔드포인트 주소
      .then((response) => { 
        setAudioData(response.data); // 서버에서 받아온 데이터로 상태 업데이트
      })
      .catch((error) => { // 에러시 알림
        console.error(error); // 에러 메시지를 콘솔에 출력
      });
  }, []);

  // audioData를 사용하여 audioLists를 만듭니다.
  const audioLists = audioData.map((song, index) => ({
    name: song.name, // 제목
    singer: song.singer, // 가수
    cover: song.cover, // 사진
    musicSrc: song.musicSrc, // 노래 데이터
    index: index, // 노래의 index
  }));

  // 선택한 트랙을 재생합니다.
  const playSelectedTrack = (index) => {
    setPlaying(!playing); // playing 초기값 true, 재생 상태
    setTrackIndex(index); // 해당 노래 위치, 초기값 0
  };

  // 트랙을 다운로드합니다.
  const downSelectedTrack = (musicSrc) => {
    const link = document.createElement('a'); // <a> 요소 생성
    link.href = musicSrc;
    document.body.appendChild(link); // <a> 요소를 문서의 body에 추가
    link.click(); // 다운로드 시작
    document.body.removeChild(link); // 다운로드가 시작되었으므로 <a> 요소를 body에서 제거
  };

  const IconStyle = {
    fontSize: '32px', // 아이콘 크기 설정
  };

  return (
    <SongPlayerContent>
      <Table>
        <tbody>
          {audioData.map((song, index) => (
            <TableRow key={index}>
              <TableCell>
                <SongTitle>
                  <p>{song.name} /</p>
                  <p>{song.singer}</p>
                </SongTitle>
              </TableCell>
              <TableCell>
                <SongImg src={song.cover} alt={song.name} />
              </TableCell>
              <TableCell>
                <StyledBtn>
                  <StyledButton onClick={() => playSelectedTrack(index)}>Play</StyledButton>
                  <div>
                    <GetAppIcon style={IconStyle} onClick={() => downSelectedTrack(song.musicSrc)} />
                  </div>
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
