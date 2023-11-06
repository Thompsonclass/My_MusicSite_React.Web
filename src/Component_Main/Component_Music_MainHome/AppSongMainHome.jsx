import React from 'react';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle';
import AppSongMainHomeExplanation from './AppSongMainHomeExplanation';
import mainhome_1 from '../../songHomeImg/mainhome1.jpg';
import mainhome from '../../songHomeImg/mainhome.jpg';
import styled from 'styled-components';
import {MainTitle, MainHomeImg1} from "../../Styled/ReadAppSongMainHome.styled"

const MusicMainHomeWrapper = styled.div `
  background-image: url(${mainhome});
  background-size: cover;
  height: 500vh;
`;

const AppSongMainHome = () => {
    // 페이지가 로드될 때 `setTimeout()` 함수를 호출합니다.
    window.onload = function () {
        setTimeout(function () {
            // `window.scrollTo()` 메서드는 페이지의 스크롤 위치를 지정 이 코드에서는 첫 번째 인수와 두 번째 인수를 모두 0으로
            // 설정하여 페이지를 맨 위 화면으로 이동
            window.scrollTo(0, 0);
        }, 100);
    };

    return (
        <MusicMainHomeWrapper>
            <AppSongMainTitle/> {/* 메인화면 제목 컴포넌트 */}
            <MainTitle>
                <h1>
                    Free music 24 hours.
                </h1>
            </MainTitle>
            <MainHomeImg1 src={mainhome_1} alt='MainHome_together'/>
            <AppSongMainHomeExplanation/> {/* 메인화면 설명 컴포넌트 */}
        </MusicMainHomeWrapper>
    );
};

export default AppSongMainHome;
