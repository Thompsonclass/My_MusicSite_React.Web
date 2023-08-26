import React from 'react';
import binly from '../../songHomeImg/binly.jpg'
import styled, { keyframes } from 'styled-components';

const BackgroundStyled = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  height: 210px;
  margin: 10px;
  border: 3px solid black;
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