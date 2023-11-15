import React from 'react';
import { GlobalStateProvider } from './Component_GlobalState/GlobalStateContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainHome from './Component_Main/Component_Music_MainHome/AppSongMainHome';
import AppSongMainShowBgm from './Component_Main/Component_PlayList_MainSong/AppSongMainShowBgm';
import AppSongPlayListSongKind from './Component_Main/Component_PlayList_SongKind/AppSongPlayListSongKind';
import AppSongEqList from './Component_Main/Component_PlayList_EqList/AppSongEqList';
import AppSongBgmContent from './Component_Main/Component_PlayList_SongKind/Componetn_PlayList_Bgm/AppSongBgmContent'
import AppSongJazzContent from './Component_Main/Component_PlayList_SongKind/Component_PlayList_Jazz/AppSongJazzContent';
import AppSongCalmContent from './Component_Main/Component_PlayList_SongKind/Component_PlayList_Calm/AppSongCalmContent';
import AppSongClassicContent from './Component_Main/Component_PlayList_SongKind/Component_PlayList_classic/AppSongClassicContent';
import AppSongCoolContent from './Component_Main/Component_PlayList_SongKind/Component_PlayList_Cool/AppSongCoolContent';
import AppSongRomanticContent from './Component_Main/Component_PlayList_SongKind/Component_PlayList_Romantic/AppSongRomanticContent';
import JoinApp from './Component_Authentication/JoinApp';

const App = () => {
  return (
    <GlobalStateProvider> {/*props의 효율적인 라이브러리*/}
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginApp />} /> {/*로그인 컴포넌트*/}
          <Route path='/Join' element={<JoinApp />} /> {/* 가입 컴포넌트 */}
          <Route path="/main" element={<AppSongMainHome />} /> {/*홈페이지 컴포넌트*/}
          <Route path="/main/Music_player" element={<AppSongMainShowBgm />} /> {/*개별 음악 컴포넌트*/}
          <Route path="/main/Music_player_main" element={<AppSongPlayListSongKind/>} /> {/*모든 음악 컴포넌트*/}
          <Route path="/main/Music_player_eq" element={<AppSongEqList />} /> {/*eq 음악 컴포넌트*/}
          <Route path='/main/Music_player_main/Bgm_List' element={<AppSongBgmContent/>} /> {/* BGM 음악 */} 
          <Route path='/main/Music_player_main/Calm_List' element={<AppSongCalmContent/>} /> {/* Calm 음악 */}
          <Route path='/main/Music_player_main/Jazz_List' element={<AppSongJazzContent/>} /> {/* Jazz 음악 */}
          <Route path='/main/Music_player_main/Classic_List' element={<AppSongClassicContent/>} /> {/* Classic 음악 */}
          <Route path='/main/Music_player_main/Cool_List' element={<AppSongCoolContent/>} /> {/* Cool 음악 */}
          <Route path='/main/Music_player_main/Romantic_List' element={<AppSongRomanticContent/>} /> {/* Romantic 음악 */}
        </Routes>
      </Router>
    </GlobalStateProvider>
  );
};

export default App;