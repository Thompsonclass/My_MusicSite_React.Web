import React from 'react';
import binly from '../../songHomeImg/binly.jpg'
import styled, { keyframes } from 'styled-components';

const BackgroundStyled = styled.div`
  display: flex;
  align-items: center; {/* justify-content: center;: 자식 요소들을 수평으로 중앙 정렬 */}
  width: 1830px;
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
  animation: ${spinAnimation} 4.5s linear infinite;
`;

const CdImage = styled.img`
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
        </div>
      </BackgroundStyled>
    </>
  );
};

export default AppSongPlayer;