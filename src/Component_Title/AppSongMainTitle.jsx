import React from 'react'
import SiderList from '../Component_Main/Component_SiderList/SiderList';
import { AppSongMainTitleBackground, Title, Solid, SiderDiv } from '../Styled/ReadMainTitle.stlyed';

function AppSongMainTitle() { 

  return (
    <>
        <AppSongMainTitleBackground> {/* 메인화면 제목 컴포넌트 */}
            <SiderDiv>
              <SiderList />
            </SiderDiv>
            <Title>
              Music Play App
            </Title>
        </AppSongMainTitleBackground>
        <Solid />
    </>
  )
}

export default AppSongMainTitle