import React, { useRef, useEffect, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import axios from 'axios'; // axios 추가
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

const AppSongPlayList = () => {
  const audioRef = useRef(null);
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

  console.log(audioData) // 노래 리스트를 제대로 불러왔는지 확인

  return (
    <> 
      <div>
        {audioData.map((song) => (
          <div className="songPlayer">
            <div className='songMainTitle'>
              <h3 className="songTitle"> {song.title} / {song.name_sources} </h3>
              <img src= {song.jpg} id="img" alt = {song.title} />
            </div>
            <AudioPlayer // 오디오 기능
              ref={audioRef}
              src={song.musicSrc}
              volume={50 / 100}
              autoPlay={false}
              controls={true}
          />
        </div>
      ))}
        <ReactJkMusicPlayer //라이브러리
          audioLists={audioData}
          mode="full"
          showMiniModeCover={false}
          autoPlay={false}
        />
      </div>
    </>
  )
}

export default AppSongPlayList
