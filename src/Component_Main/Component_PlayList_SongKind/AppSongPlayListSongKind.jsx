import React from 'react';
import { MainWrapper } from '../../Styled/ReadMainWrapper.styled'
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle';
import AppSongJazz from './Component_PlayList_Jazz/AppSongJazzBtn';
import AppSongBgm from './Componetn_PlayList_Bgm/AppSongBgmBtn';
import AppSongCalm from './Component_PlayList_Calm/AppSongCalmBtn';
import AppSongClassicBtn from './Component_PlayList_classic/AppSongClassicBtn';
import AppSongCoolBtn from './Component_PlayList_Cool/AppSongCoolBtn';
import AppSongRomanticBtn from './Component_PlayList_Romantic/AppSongRomanticBtn';
import styled from 'styled-components'

const StyledSideHomeWrapper = styled.div`
  display: flex;
  flex-direction: row; /* 가로 배치*/
  justify-content: center;  /* 가운데 배치 */
`

function AppSongPlayListSongKind() {
  return (
    <MainWrapper> {/* 배경화면 */}
      <AppSongMainTitle /> {/* 홈페이지 메인 제목 */}
      <StyledSideHomeWrapper>
          <div>
            <AppSongJazz /> {/* 재즈 */}
            <AppSongBgm /> {/* BGM */}
            <AppSongCalm /> {/* Calm */}
            <AppSongCoolBtn /> {/* Cool */}
            <AppSongRomanticBtn /> {/* Romantic */}
            <AppSongClassicBtn /> {/* Classic */}
          </div>
      </StyledSideHomeWrapper>
    </MainWrapper>
  );
}

export default AppSongPlayListSongKind;
