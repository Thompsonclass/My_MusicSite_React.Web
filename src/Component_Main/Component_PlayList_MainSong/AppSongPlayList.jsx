import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import axios from 'axios'; // axios 추가
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import styled from 'styled-components';

const SongPlayer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(226, 235, 243);
  width: 400px;
  padding: 10px;
  margin: 10px;
  height: 110px;
  border: solid 2px lightblue;
`;

const SongMainTitle = styled.div`
  display: flex;
  align-items: center;
`;

const SongTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SongImg = styled.img`
  width: 30px;
  height: 40px;
  margin-left: 10px;
`;

const AppSongPlayList = () => {
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/songs') // 주소
      .then((response) => {
        setAudioData(response.data);
      })
      .catch((error) => { //에러시 알림
        console.error(error);
      });
  }, []);

  console.log(audioData); // 노래 리스트를 제대로 불러왔는지 확인

  const audioLists = audioData.map((song) => ({
    name: song.name, // 제목
    singer: song.singer, // 출처
    cover: song.cover, // 이미지
    musicSrc: song.musicSrc, // 노래
  }));

  return (
    <div>
      {audioLists.map((song) => (
        <SongPlayer key={song.name}>
          <SongMainTitle>
            <SongTitle> {song.name} / {song.singer} </SongTitle>
            <SongImg src={song.cover} alt={song.name} />
          </SongMainTitle>
          <AudioPlayer // 오디오 기능
            src={song.musicSrc}
            volume={50 / 100}
            autoPlay={false}
            controls={true}
          />
        </SongPlayer>
      ))}
      <ReactJkMusicPlayer //라이브러리
        audioLists={audioLists}
        mode="full"
        showMiniModeCover={false}
        autoPlay={false}
      />
    </div>
  );
}

export default AppSongPlayList;