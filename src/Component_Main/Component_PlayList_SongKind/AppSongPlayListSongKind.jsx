import React from 'react';
import { StyledMainHomeWrapper } from '../../Component_MainHomeWrapper/Read.styled';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle';
import AppSongJazz from './Component_PlayList_Jazz/AppSongJazz';
import AppSongBgm from './Componetn_PlayList_Bgm/AppSongBgm';
import styled from 'styled-components'

const StyledSideHomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
`

function AppSongPlayListSongKind() {
  return (
    <StyledMainHomeWrapper>
      <AppSongMainTitle /> {/* 홈페이지 메인 제목 */}
      <StyledSideHomeWrapper>
        <AppSongJazz /> {/* 재즈 */}
        <AppSongBgm /> {/* BGM */}
      </StyledSideHomeWrapper>
    </StyledMainHomeWrapper>
  );
}

export default AppSongPlayListSongKind;
