import React from 'react';
import AppSongPlayer from './AppSongPlayer';
import AppSongPlayList from './AppSongPlayList';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목
import styled from 'styled-components';

function AppSongMainShowBgm() {

  const MainContainer = styled.div`
    position: absolute;
    top: 33%;
    height: 100vh;
  `;

  return (
    <>
      <AppSongMainTitle />
      <AppSongPlayer />
      <MainContainer>
          <AppSongPlayList />
      </MainContainer>
    </>
  );
}

export default AppSongMainShowBgm;