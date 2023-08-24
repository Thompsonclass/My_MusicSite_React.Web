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
  color: black;
  margin: 35px;
  font-size: 35px;
`;

const Solid = styled.hr`
  width: 100%;
  border: 2px solid white;
`;

const SiderDiv = styled.div`
  margin: 30px;
  width: 30px;
`

  return (
    <>
        <AppSongMainTitle> {/* 메인화면 제목 컴포넌트 */}
            <SiderDiv>
              <SiderList />
            </SiderDiv>
            <Title>
              Music Play App
            </Title>
        </AppSongMainTitle>
        <Solid />
    </>
  )
}

export default AppSongMainTitle