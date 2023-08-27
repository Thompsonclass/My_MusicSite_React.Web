import React from 'react';
import AppSongMainTitle from '../../../Component_Title/AppSongMainTitle'
import { StyledMainHomeWrapper } from '../../../Component_MainHomeWrapper/Read.styled';

function AppSongIdolContent() {
  return (
    <StyledMainHomeWrapper> {/* 메인 배경 화면 */}
      <AppSongMainTitle /> {/* 홈페이지 제목 */}
    </StyledMainHomeWrapper>
  )
}

export default AppSongIdolContent
