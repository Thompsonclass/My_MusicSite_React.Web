import React from 'react';
import AppSongPlayer from './AppSongPlayer';
import AppSongPlayList from './AppSongPlayList';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목

import styled from 'styled-components';
import MainHomeWrapper from '../../MainHomeWrapper.gif'

const MainHomeWrapperGif = styled.div`
  width: 100%;
  height: 300vh;
  background-image: url(${MainHomeWrapper});
  background-size: cover;
  background-position: center;
`
const MainContainer = styled.div`
  position: absolute;
  top: 33%;
  height: 100vh;
`;

function AppSongMainShowBgm() {
  return (
    <MainHomeWrapperGif> {/* 메인 배경 화면*/}
      <AppSongMainTitle /> {/* 음악 메인 제목 */}
      <AppSongPlayer /> {/* 음악 플레이어 모양 */}
      <MainContainer>
        <AppSongPlayList /> {/* 음악 플레이어 리스트*/}
      </MainContainer>
    </MainHomeWrapperGif>
  );
}

export default AppSongMainShowBgm;