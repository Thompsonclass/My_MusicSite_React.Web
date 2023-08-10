import React from 'react';
import { GlobalStateProvider } from './Component_GlobalState/GlobalStateContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainHome from './Component_Main/AppSongMainHome';
import AppSongMainShowBgm from './Component_Main/Component_PlayList_MainSong/AppSongMainShowBgm';
import AppSongPlayListSongKind from './Component_Main/Component_PlayList_SongKind/AppSongPlayListSongKind';

const App = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginApp />} /> 
          <Route path="/main" element={<AppSongMainHome />} />
          <Route path="/main/Music_BGM" element={<AppSongMainShowBgm />} />
          <Route path="/main/Music_player_main"element={<AppSongPlayListSongKind/>} />
        </Routes>
      </Router>
    </GlobalStateProvider>
  );
};

export default App;