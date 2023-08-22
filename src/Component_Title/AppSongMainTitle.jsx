import React from 'react'
import styled from 'styled-components';
import SiderList from '../Component_Main/Component_SiderList/SiderList';

function AppSongMainTitle() { 

const AppSongMainTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-family: serif;
  color: white;
  margin: 25px;
`;

const Solid = styled.hr`
  width: 100%;
  border-top: 2px solid black;
`;

  return (
    <>
        <AppSongMainTitle> {/* 메인화면 제목 컴포넌트 */}
            <SiderList />
            <Title>Music Play App</Title>
        </AppSongMainTitle>
        <Solid />
    </>
  )
}

export default AppSongMainTitle