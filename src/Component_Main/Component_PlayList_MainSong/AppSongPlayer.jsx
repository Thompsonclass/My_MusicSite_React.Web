import React from 'react';
import binly from './binly.jpg';
import bgm from './bgm.jpg';
import styled from 'styled-components';

const BackgroundStyled = styled.div`
  background-size: cover;
  width: 1350px;
  height: 800px;
  position: fixed;
  margin: 10px;
  border: solid 2px lightblue;
`;

const CdStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
`;

const BgmStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const CdImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BgmImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AppSongPlayer = ({ imageSrc }) => {
  return (
    <>
      <BackgroundStyled className="backgroundStyle">
        <div>
          <CdStyled className="cdStyle">
            <CdImage src={binly} alt="CD" />
          </CdStyled>
          <BgmStyled className="bgmStyle">
            <BgmImage src={bgm} alt="BGM" />
          </BgmStyled>
        </div>
      </BackgroundStyled>
    </>
  );
};

export default AppSongPlayer;