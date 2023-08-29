import React from 'react'
import SiderList from '../Component_Main/Component_SiderList/SiderList';
import { AppSongMainTitleBackground, Title, Solid, SiderDiv, WaveDiv } from '../Styled/ReadMainTitle.stlyed';
import Wave from 'react-wavify';

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
          <WaveDiv style={{ height: '50%' }}>
            <Wave 
            /*fill='#f79902'*/
            paused={false}
            options={{
              amplitude: 60,
              speed: 0.20,
              points: 3,
            }}
            />
          </WaveDiv>
          <Solid />
    </>
  )
}

export default AppSongMainTitle;