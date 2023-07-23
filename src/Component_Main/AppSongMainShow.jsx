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
    // Express 서버에서 노래 데이터 가져오기
    axios.get('/api/songs')
      .then((response) => {
        setAudioData(response.data);
      })
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
            <AudioPlayer
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
      <ReactJkMusicPlayer
        audioLists={audioData}
        mode="full"
        showMiniModeCover={false}
        autoPlay={false}
      />
    </Router>
  );
}

export default AppSongMainShow;