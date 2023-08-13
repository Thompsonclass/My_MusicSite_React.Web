import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppSongMainShowBgm from './Component_PlayList_MainSong/AppSongMainShowBgm';
import AppSongPlayListSongKind from './Component_PlayList_SongKind/AppSongPlayListSongKind';
import AppSongMainTitle from '../Component_Title/AppSongMainTitle'; // 메인화면 제목

const AppSongMainShow = () => {
  useEffect(() => {
    document.title = '음악 플레이어';
  }, []);

  return (
    <>
      <AppSongMainTitle /> {/* 메인화면 제목 컴포넌트 */}
      <Routes>
        <Route path="/main/Music_BGM" element={<AppSongMainShowBgm />} />
        <Route path="/main/Music_player_main" element={<AppSongPlayListSongKind />} />
      </Routes>
    </>
  );
};

export default AppSongMainShow;
