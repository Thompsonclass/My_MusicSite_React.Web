import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppSongFavoriteList from './AppSongFavoriteList';
import AppSongPlayList from './AppSongPlayList';
import SiderList from './SiderList';
import AppSongPlayer from './AppSongPlayer';

const AppSongMainShow = () => {

  return (
    <Router>
      <div className='AppSongMainTitle'>
        <SiderList />
        <h1 className='Title'>Music Play App</h1>
      </div>
      <hr />
      <Routes>
        <Route path="/page1" element={<AppSongFavoriteList />} />
      </Routes>
      <div className='AppSongMainPlayer'>
        <AppSongPlayList />
        <div>
          <AppSongPlayer /> 
        </div>
      </div>
    </Router>
  );
}

export default AppSongMainShow;