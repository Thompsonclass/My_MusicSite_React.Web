import React from 'react';
import styled from 'styled-components';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목
import AppSongMainHomeExplanation from './AppSongMainHomeExplanation';
import mainhome from '../../songHomeImg/mainhome.jpg'

// Styled components
const MusicMainimg = styled.div`
  background-image: url(${mainhome});
  background-size: cover;
`;

const MainHomeWrapper = styled.div`
  width: 100%;
  height: 450vh;
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: 'Noto Serif KR', serif;
`;

const AppSongMainHome = () => {

  return (
    <MusicMainimg>
    <MainHomeWrapper>
        <AppSongMainTitle /> {/* 메인화면 제목 컴포넌트 */}
        <MainTitle><h1>Welcome to Our Music Player</h1></MainTitle>
        <AppSongMainHomeExplanation />
    </MainHomeWrapper>
    </MusicMainimg>
  );
};

export default AppSongMainHome;
