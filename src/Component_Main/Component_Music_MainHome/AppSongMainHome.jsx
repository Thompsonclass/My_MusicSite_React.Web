import React from 'react';
import styled from 'styled-components';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목
import AppSongMainHomeExplanation from './AppSongMainHomeExplanation';
import mainhome from '../../songHomeImg/mainhome.jpg'
import mainHome_together from '../../songHomeImg/MainHome_together.jpg'

// Styled components
const MusicMainHomeWrapper = styled.div`
  background-image: url(${mainhome});
  background-size: cover;
  height: 500vh;
`;

const TogetherImg = styled.img`
  width: 100%;
  height: 40em;
`

const MainTitle = styled.div`
  font-size: 50px;
  margin-top: 2em;
  margin-left: 4em;
  font-family: 'Noto Serif KR', serif;
  position: absolute;
  top: 20%;
  left: 25%;
  transform: translate(-50%, -50%);
`;

const AppSongMainHome = () => {

// 페이지가 로드될 때 `setTimeout()` 함수를 호출합니다.
window.onload = function() {
  setTimeout(function(){
    // `window.scrollTo()` 메서드는 페이지의 스크롤 위치를 지정
    // 이 코드에서는 첫 번째 인수와 두 번째 인수를 모두 0으로 설정하여 페이지를 맨 위 화면으로 이동
    window.scrollTo(0, 0);
  }, 100);
};
  
  return (
    <MusicMainHomeWrapper>
        <AppSongMainTitle /> {/* 메인화면 제목 컴포넌트 */}
        <MainTitle><h1>Free music <mark>24 hours.</mark></h1></MainTitle>
        <TogetherImg src={mainHome_together} alt=' MainHome_together' />
        <AppSongMainHomeExplanation />
    </MusicMainHomeWrapper>
  );
};

export default AppSongMainHome;