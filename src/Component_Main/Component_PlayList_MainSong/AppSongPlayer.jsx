import React from 'react';
import binly from './binly.jpg';
import bgm from './bgm.jpg';
import styled, { keyframes } from 'styled-components';
import MusicSpectrum from '../Component_Music_Spectrum/MusicSpectrumPlay'

const BackgroundStyled = styled.div`
  width: 1870px;
  height: 200px;
  margin: 10px;
  border: solid 2px lightblue;
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
  top: 10%;
  left: 11%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  animation: ${spinAnimation} 4.5s linear infinite;
`;

const BgmStyled = styled.div`
  position: absolute;
  top: 20%;
  left: 8%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 180px;
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


const Spectrum = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
  width: 1000px;
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
        <div>
          <Spectrum>
            <MusicSpectrum />
          </Spectrum>
        </div>
      </BackgroundStyled>
    </>
  );
};

export default AppSongPlayer;