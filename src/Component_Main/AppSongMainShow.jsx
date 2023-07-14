import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppSongFavoriteList from './AppSongFavoriteList';
import AppSongPlayList from './AppSongPlayList';
import AppSongPlayer from './AppSongPlayer';

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
    <>
      <Router>
        <div className='linkStyleDiv'>
          <div className="linkContainer">
            <Link to="/favorites" className="linkStyle">
              즐겨찾기 목록
            </Link>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/favorites" element={<AppSongFavoriteList />} />
          </Routes>
        </div>
      </Router>
      <AppSongPlayList />
      <AppSongPlayer />
      <audio ref={audioRef} src="http://localhost:3000/songs/jazz-happy" />
      {isPlaying ? (
        <button onClick={Pause}>일시정지</button>
      ) : (
        <button onClick={Play}>재생</button>
      )}
    </>
  );
}

export default AppSongMainShow;