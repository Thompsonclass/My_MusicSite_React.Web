import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppSongMainShowBgm from './Component_PlayList_MainSong/AppSongMainShowBgm';
import AppSongPlayListSongKind from './Component_PlayList_SongKind/AppSongPlayListSongKind';
import SiderList from './Component_SiderList/SiderList';

const AppSongMainShow = () => {
  useEffect(() => {
    document.title = "음악 플레이어";
  }, []);

  return (
    <div>
      <div className='AppSongMainTitle'>
        <SiderList />
        <h1 className='Title'>Music Play App</h1>
      </div>
      <hr />
      <Routes>
        <Route path="Music_BGM" element={<AppSongMainShowBgm />} />
        <Route path="Music_player_main" element={<AppSongPlayListSongKind />} />
      </Routes>
    </div>
  );
}

export default AppSongMainShow;