import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppSongFavoriteList from './AppSongFavoriteList';
import SiderList from './SiderList';
import AppSongPlayer from './AppSongPlayer';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import axios from 'axios'; // axios 추가
import AudioPlayer from 'react-audio-player';

const AppSongMainShow = () => {
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

  return (
    <Router>
      <div className='SliderList'>
        <SiderList />
        <h1 className='Title'>Music Play App</h1>
      </div>
      <hr />
      <Routes>
        <Route path="/page1" element={<AppSongFavoriteList />} />
      </Routes>
      <div className='AppSongMainPlayer'>
        <div>
          <div className="songPlayer">
            <div className='songMainTitle'>
              <h3 className="songTitle">[ catch-it ]</h3>
              <img src="/songImages/jazzhappy.jpg" id="img" alt="catch-it" />
            </div>
            <AudioPlayer //오디오 기능
              ref={audioRef}
              src="/songs/catch-it-117676.mp3"
              volume={50 / 100}
              autoPlay={false}
              controls={true}
            />
          </div>
        </div>
        <div className='AppSongPlayer'>
          <AppSongPlayer />
        </div>
      </div>
      <ReactJkMusicPlayer //라이브러리
        audioLists={audioData}
        mode="full"
        showMiniModeCover={false}
        autoPlay={false}
      />
    </Router>
  );
}

export default AppSongMainShow;