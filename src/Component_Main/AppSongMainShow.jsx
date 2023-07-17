import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IconButton, Slider } from '@material-ui/core';
import { PlayArrow, Pause, VolumeUp } from '@material-ui/icons';
import AppSongFavoriteList from './AppSongFavoriteList';
import AudioPlayer from 'react-audio-player';
import SiderList from './SiderList';

const AppSongMainShow = () => {
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  return (
    <Router>
      <div className='SliderList'>
        <SiderList />
        <h1 className='Title'>Music Play</h1>
      </div>
      <hr />
      <Routes>
        <Route path="/page1" element={<AppSongFavoriteList />} />
      </Routes>

      <div>
        <div className="songPlayer">
          <div className='songMainTitle'>
            <h3 className="songTitle">[ catch-it ]</h3>
            <img src="/songImages/jazzhappy.jpg" id="img" alt="catch-it" />
          </div>
          <div className='songControl'>
          </div>
          <AudioPlayer
            ref={audioRef}
            src="/songs/catch-it-117676.mp3"
            volume={volume / 100}
            autoPlay={false}
            controls={true}
          />
        </div>
      </div>
    </Router>
  );
}

export default AppSongMainShow;