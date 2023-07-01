import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppCssLeftList from './Component_MainFixed/AppCssLeftList';
import AppSongPlayList from './AppSongPlayList';
import AppSongFavoriteList from './AppSongFavoriteList';

const AppSongMainShow = () => {
  useEffect(() => {
    document.title = '메인화면';
  });

  return (
    <>
    <Router>
      <div className='linkStyleDiv'>
        <div>
          <span>
            <Link to="/playlist" className="linkStyle">
              노래 목록
            </Link>
          </span>
          <span>
            <Link to="/favorites" className="linkStyle">
              즐겨찾기 목록
            </Link>
          </span>
        </div>
        <div>
          <Routes>
            <Route path="/playlist" element={<AppSongPlayList />} />
            <Route path="/favorites" element={<AppSongFavoriteList />} />
          </Routes>
        </div>
      </div>
    </Router>
    <AppCssLeftList />
    </>
  );
};

export default AppSongMainShow;

//화면 간의 이동을 관리하기 위해 React Router를 사용
//npm install react-router-dom