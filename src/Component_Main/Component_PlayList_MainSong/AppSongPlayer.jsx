import React from 'react';
import binly from '../../songHomeImg/binly.jpg'
import styled, { keyframes } from 'styled-components';

const BackgroundStyled = styled.div`
  display: flex;
  align-items: center;
  width: 115em; /* 플레이어 테두리 가로 길이 */
  height: 220px;
  margin: 10px;
  border: 2px solid black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* 그림자 효과 추가 */
  margin-bottom: 10px; /* 하단 여백 추가 */
`;

const spinAnimation = keyframes` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CdStyled = styled.div`
  width: 190px;
  height: 190px;
  border-radius: 50%;
  overflow: hidden;
  animation: ${spinAnimation} 4.5s linear infinite; /* 4.5초 간격으로 무한 반복 */
`;

const CdImage = styled.img`
  width: 100%;
  height: 100%;
`;

const AppSongPlayer = () => {
  return (
      <BackgroundStyled>
        <div>     
          <CdStyled>
            <CdImage src={binly} alt="CD" />
          </CdStyled>
        </div>
      </BackgroundStyled>
  );
};

export default AppSongPlayer;