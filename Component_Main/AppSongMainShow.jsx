import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppCssLeftList from './Component_MainFixed/AppCssLeftList';
import AppCssTopList from './Component_MainFixed/AppCssTopList';
import AppSongPlayList from './AppSongPlayList';
import AppSongFavoriteList from './AppSongFavoriteList';

const AppSongMainShow = () => {

  useEffect(() => {
    document.title = '메인화면';
  });

  return (
    <Router>
      <div>
        <div>
          <Link to="/">음악 플레이어</Link>
          <Link to="/playlist">노래 목록</Link>
          <Link to="/favorites">즐겨찾기 목록</Link>
        </div>
        <div>
        <Routes>
          <Route path="/playlist" element={<AppSongPlayList />} />
          <Route path="/favorites" element={<AppSongFavoriteList />} />
        </Routes>
        </div>
      </div>
      <h1>메인화면</h1>
    </Router>
  );
};

export default AppSongMainShow;

//화면 간의 이동을 관리하기 위해 React Router를 사용
//npm install react-router-dom