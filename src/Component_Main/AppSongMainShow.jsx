import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppSongMainShowBgm from './Component_PlayList_MainSong/AppSongMainShowBgm';
import AppSongPlayListSongKind from './Component_PlayList_SongKind/AppSongPlayListSongKind';
import SiderList from './Component_SiderList/SiderList';

const AppSongMainShow = () => {

  useEffect(() => {
      document.title = "음악 플레이어"
    }, []);

  return (
      <Router>
        <div className='AppSongMainTitle'>
          <SiderList />
          <h1 className='Title'>Music Play App</h1>
        </div>
        <hr />
        <Routes>
          <Route path="/page1" element={<AppSongMainShowBgm />} />
          <Route path="/page2" element={<AppSongPlayListSongKind />} />
        </Routes>
      </Router> 
  );
}

export default AppSongMainShow;