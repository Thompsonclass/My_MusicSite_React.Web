import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IconButton, Slider } from '@material-ui/core';
import { PlayArrow, Pause, VolumeUp } from '@material-ui/icons';
import AppSongFavoriteList from './AppSongFavoriteList';
import AudioPlayer from 'react-audio-player';
import SiderList from './SiderList';

const AppSongMainShow = () => {
  const [Playing, setPlaying] = useState(false); // 재생
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  const handlePlayPause = () => { //재생
    setPlaying(!Playing);
  };

  const handleVolumeChange = (_, newValue) => {
    setVolume(newValue);
    audioRef.current.audioEl.volume = newValue / 100;
  };


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

      <div className="songPlayer">
        <span className = "IconButton">
        <IconButton onClick={handlePlayPause}>
          {Playing ? <Pause /> : <PlayArrow />} 
        </IconButton>
        </span>
        <span>
        <Slider
          value={volume}
          onChange={handleVolumeChange}
          min={0}
          max={100}
          aria-labelledby="volume_slider"
          className="volume-slider"
          style={{ width: '150px' }}
        />
        </span>
          <VolumeUp className="volumeIcon" />
          <AudioPlayer
            ref={audioRef}
            src="http://localhost:3000/songs/jazz-happy"
            volume={volume / 100}
            autoPlay={false}
            controls={false}
        />
      </div>

    </Router>
  );
}

export default AppSongMainShow;