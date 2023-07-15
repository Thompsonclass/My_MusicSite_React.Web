import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppSongFavoriteList from './AppSongFavoriteList';
//import AppSongPlayList from './AppSongPlayList';
//import AppSongPlayer from './AppSongPlayer';
import SiderList from './SiderList';

const AppSongMainShow = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  useEffect(() => {
    document.title = '홈페이지';
  });

  const Play = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const Pause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
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

      <audio ref={audioRef} src="http://localhost:3000/songs/jazz-happy" />
      {isPlaying ? (
        <button onClick={Pause}>일시정지</button>
      ) : (
        <button onClick={Play}>재생</button>
      )}
    </Router>
  );
}

export default AppSongMainShow;