import React from 'react';
import AppSongPlayer from './AppSongPlayer';
import AppSongPlayList from './AppSongPlayList';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목
import { MainWrapper } from '../../Styled/ReadMainWrapper.styled';
import AppSongAppendTitle from './AppSongAppendTitle';
import AppSongPlayerDelete from './AppSongPlayerDelete';
 
function AppSongMainShowBgm() {
  return (
    <MainWrapper>
      <AppSongMainTitle /> {/* 메인화면 제목 컴포넌트 */}
      <AppSongPlayer /> {/* 음악 플레이어 모양 */}
      <AppSongPlayList /> {/* 음악 플레이어 리스트*/}
      <AppSongPlayerDelete /> {/* 음악 좋아요 리스트 제거 */}
      <AppSongAppendTitle /> {/* 음악 노래 추가 제목 */}
    </MainWrapper> 
  );
}

export default AppSongMainShowBgm;
