import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppSongFavoriteList from './AppSongFavoriteList';
import AudioPlayer from 'react-audio-player';
import SiderList from './SiderList';

import AppSongPlayer from './AppSongPlayer';

const AppSongMainShow = () => {
  const [Playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const PlayingButton = () => {

  }
  
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
      <div className='AppSongMainPlayer'>
        <div>
          <div className="songPlayer">
            <div className='songMainTitle'>
              <h3 className="songTitle">[ catch-it ]</h3>
              <img src="/songImages/jazzhappy.jpg" id="img" alt="catch-it" />
            </div>
            <div className='songControl'>
              <button onClick={PlayingButton}>{Playing ? 'Pause' : 'Play'}</button>
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
          <AppSongPlayer Playing={Playing} />
        </div>
      </div>
    </Router>
  );
}

export default AppSongMainShow;