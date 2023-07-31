import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppSongFavoriteList from './AppSongFavoriteList';
import AppSongPlayList from './AppSongPlayList';
import SiderList from './SiderList';
import AppSongPlayer from './AppSongPlayer';

const AppSongMainShow = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audioLists, setAudioLists] = useState([]); // 노래 리스트 상태 추가

  const handleAudioChange = (currentPlayId, audioLists, _) => {
    const currentIndex = audioLists.findIndex((item) => item.id === currentPlayId);
    setCurrentSongIndex(currentIndex);
  };

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
        <AppSongPlayList 
          onAudioChange={handleAudioChange} // onAudioChange 이벤트 핸들러 전달
          setAudioLists={setAudioLists} // 노래 리스트 업데이트 함수 전달
        />
        <div>
          <AppSongPlayer  imageSrc={audioLists[currentSongIndex]?.cover}/> 
        </div>
      </div>
    </Router>
  );
}

export default AppSongMainShow;