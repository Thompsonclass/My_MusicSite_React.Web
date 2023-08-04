import React, { useState } from 'react'
import AppSongPlayer from './AppSongPlayer';
import AppSongPlayList from './AppSongPlayList';

function AppSongMainShowBgm() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [audioLists, setAudioLists] = useState([]); // 노래 리스트 상태 추가
  
    const handleAudioChange = (currentPlayId, audioLists, _) => {
      const currentIndex = audioLists.findIndex((item) => item.id === currentPlayId);
      setCurrentSongIndex(currentIndex);
    };

  return (

      <div className='AppSongMainPlayer'>
      <AppSongPlayList 
        onAudioChange={handleAudioChange} // onAudioChange 이벤트 핸들러 전달
        setAudioLists={setAudioLists} // 노래 리스트 업데이트 함수 전달
      />
      <div>
        <AppSongPlayer  imageSrc={audioLists[currentSongIndex]?.cover}/> 
      </div>
    </div>

  )
}

export default AppSongMainShowBgm

