import React, { useState } from 'react';
import AppSongPlayer from './AppSongPlayer';
import AppSongPlayList from './AppSongPlayList';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목
import styled from 'styled-components';

function AppSongMainShowBgm() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audioLists, setAudioLists] = useState([]); // 노래 리스트 상태 추가

  const handleAudioChange = (currentPlayId, audioLists, _) => {
    const currentIndex = audioLists.findIndex((item) => item.id === currentPlayId);
    setCurrentSongIndex(currentIndex);
  };

  const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
    <>
      <AppSongMainTitle />
      <MainContainer>
        <div>
          <AppSongPlayList 
            onAudioChange={handleAudioChange} // onAudioChange 이벤트 핸들러 전달
            setAudioLists={setAudioLists} // 노래 리스트 업데이트 함수 전달
          />
        </div>
        <div>
          <AppSongPlayer imageSrc={audioLists[currentSongIndex]?.cover} />
        </div>
      </MainContainer>
    </>
  );
}

export default AppSongMainShowBgm;