import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppSongFavoriteList from './AppSongFavoriteList';

const AppSongMainShow = () => {
  useEffect(() => {
    document.title = '홈페이지';
  });

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
      <h1>AppSongPlayList</h1>
      <h1>AppSongPlayer</h1>
    </>
  );
}

export default AppSongMainShow;

//화면 간의 이동을 관리하기 위해 React Router를 사용
//npm install react-router-dom