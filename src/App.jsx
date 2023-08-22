import React from 'react';
import { GlobalStateProvider } from './Component_GlobalState/GlobalStateContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainHome from './Component_Main/AppSongMainHome';
import AppSongMainShowBgm from './Component_Main/Component_PlayList_MainSong/AppSongMainShowBgm';
import AppSongPlayListSongKind from './Component_Main/Component_PlayList_SongKind/AppSongPlayListSongKind';

const App = () => {
  return (
    <GlobalStateProvider> {/*props의 효율적인 라이브러리*/}
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginApp />} /> {/*로그인 컴포넌트*/}
          <Route path="/main" element={<AppSongMainHome />} /> {/*홈페이지 컴포넌트*/}
          <Route path="/main/Music_BGM" element={<AppSongMainShowBgm />} /> {/*개별 음악 컴포넌트*/}
          <Route path="/main/Music_player_main"element={<AppSongPlayListSongKind/>} /> {/*모든 음악 컴포넌트*/}
        </Routes>
      </Router>
    </GlobalStateProvider>
  );
};

export default App;