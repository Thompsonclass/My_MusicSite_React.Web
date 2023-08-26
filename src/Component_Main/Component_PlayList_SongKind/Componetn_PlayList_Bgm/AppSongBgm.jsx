import React from 'react'
import styled from 'styled-components'

const AppSongBgmBackground = styled.div`
  width: 400px;
  height: 400px;
  background-color: pink;
  border-radius: 10px;
  border: none;
  margin: 30px;
  font-size: 50px;

  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center;
`;

function AppSongBgm() {
  
const AppSongBgm = () => { /* 재즈 노래 버튼 */
  
}

  return (
    <AppSongBgmBackground onClick={AppSongBgm}>
        Bgm
    </AppSongBgmBackground>
  )
}

export default AppSongBgm;