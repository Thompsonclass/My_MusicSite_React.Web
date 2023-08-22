import React from 'react';
import binly from '../../songHomeImg/binly.jpg'
import bgm from  '../../songHomeImg/bgm.jpg'
import styled, { keyframes } from 'styled-components';

const BackgroundStyled = styled.div`
  width: 1830px;
  height: 202px;
  margin: 10px;
  border: 2px solid black;
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
  position: absolute;
  top: 13%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 190px;
  height: 190px;
  border-radius: 50%;
  overflow: hidden;
  animation: ${spinAnimation} 4.5s linear infinite;
`;

const BgmStyled = styled.div`
  position: absolute;
  top: 23%;
  left: 7%;
  transform: translate(-50%, -50%);
  width: 223px;
  height: 196px;
  border-radius: 50%;
`;

const CdImage = styled.img`
  width: 100%;
  height: 100%;
`;

const BgmImage = styled.img`
  width: 100%;
  height: 100%;
`;

const AppSongPlayer = () => {
  return (
    <>
      <BackgroundStyled>
        <div>
          <CdStyled>
            <CdImage src={binly} alt="CD" />
          </CdStyled>
          <BgmStyled>
            <BgmImage src={bgm} alt="BGM" />
          </BgmStyled>
        </div>
      </BackgroundStyled>
    </>
  );
};

export default AppSongPlayer;