import React from 'react';
import AppSongPlayer from './AppSongPlayer';
import AppSongPlayList from './AppSongPlayList';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목
import { StyledMainHomeWrapper } from '../../Component_MainHomeWrapper/Read.styled';

function AppSongMainShowBgm() {
  return (
    <StyledMainHomeWrapper>
      <AppSongMainTitle /> {/* 메인화면 제목 컴포넌트 */}
      <AppSongPlayer /> {/* 음악 플레이어 모양 */}
      <AppSongPlayList /> {/* 음악 플레이어 리스트*/}
    </StyledMainHomeWrapper> 
  );
}

export default AppSongMainShowBgm;
