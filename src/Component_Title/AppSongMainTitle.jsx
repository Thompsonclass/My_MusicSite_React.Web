import React from 'react';
import SiderList from '../Component_SiderList/SiderList';
import { AppSongMainTitleBackground, Title, Solid, SiderDiv, WaveDiv } from '../Styled/ReadMainTitle.stlyed';  // 스타일드 컴포넌트 및 컴포넌트 import
import Wave from 'react-wavify';

function AppSongMainTitle() {
    return (
        <>
            {/* 메인화면 제목 컴포넌트의 배경 */}
            <AppSongMainTitleBackground>
                {/* 사이드 리스트가 위치하는 div */}
                <SiderDiv>
                    <SiderList />
                </SiderDiv>

                {/* 제목 텍스트 */}
                <Title>YMusic Player</Title>
            </AppSongMainTitleBackground>

            {/* 파도 모양의 애니메이션을 생성하는 WaveDiv */}
            <WaveDiv>
                {/* react-wavify를 사용한 파도 애니메이션 */}
                <Wave
                    /*fill='#f79902'*/
                    paused={false} // 애니메이션 일시 정지 여부
                    options={{
                        amplitude: 60,  // 앰플리튜드(파도의 높낮이)
                        speed: 0.20,   // 속도
                        points: 3      // 파도의 갯수
                    }}
                />
            </WaveDiv>

            {/* 배경과 제목을 연결하는 Solid */}
            <Solid />
        </>
    );
}

export default AppSongMainTitle;
