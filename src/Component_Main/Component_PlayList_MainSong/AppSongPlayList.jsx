import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import axios from 'axios'; // axios 추가
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

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
        <div key={song.name} className="songPlayer">
          <div className='songMainTitle'>
            <h3 className="songTitle"> {song.name} / {song.singer} </h3>
            <img src={song.cover} id="img" alt={song.name} />
          </div>
          <AudioPlayer // 오디오 기능
            src={song.musicSrc}
            volume={50 / 100}
            autoPlay={false}
            controls={true}
          />
        </div>
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
