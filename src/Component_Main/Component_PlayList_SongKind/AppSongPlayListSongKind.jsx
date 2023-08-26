import React from 'react';
import { StyledMainHomeWrapper } from '../../Component_MainHomeWrapper/Read.styled';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle';
import AppSongJazz from './Component_PlayList_Jazz/AppSongJazzBtn';
import AppSongBgm from './Componetn_PlayList_Bgm/AppSongBgmBtn';
import AppSongIdol from './Component_PlayList_Idol/AppSongIdolBtn';
import styled from 'styled-components'

const StyledSideHomeWrapper = styled.div`
  display: flex;
  flex-direction: row; /* 가로 배치*/
  justify-content: center;  /* 가운데 배치 */
`

function AppSongPlayListSongKind() {
  return (
    <StyledMainHomeWrapper> {/* 배경화면 */}
      <AppSongMainTitle /> {/* 홈페이지 메인 제목 */}
      <StyledSideHomeWrapper>
          <AppSongJazz /> {/* 재즈 */}
          <AppSongBgm /> {/* BGM */}
          <AppSongIdol /> {/* Idol */}
      </StyledSideHomeWrapper>
    </StyledMainHomeWrapper>
  );
}

export default AppSongPlayListSongKind;
