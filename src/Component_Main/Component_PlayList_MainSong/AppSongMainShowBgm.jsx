import React from 'react';
import AppSongPlayer from './AppSongPlayer';
import AppSongPlayList from './AppSongPlayList';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목
import styled from 'styled-components';

function AppSongMainShowBgm() {

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
          />
        </div>
        <div>
          <AppSongPlayer />
        </div>
      </MainContainer>
    </>
  );
}

export default AppSongMainShowBgm;