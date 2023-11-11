import styled, {keyframes} from "styled-components";

export const BackgroundStyled = styled.div `
  display: flex;
  align-items: center;
  height: 220px;
  margin: 10px;
  border: 2px solid black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* 그림자 효과 추가 */
`;

export const spinAnimation = keyframes ` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CdStyled = styled.div `
  width: 190px;
  height: 190px;
  border-radius: 50%;
  overflow: hidden;
  animation: ${spinAnimation} 4.5s linear infinite; /* 4.5초 간격으로 무한 반복 */
`;

export const CdImage = styled.img `
  width: 100%;
  height: 100%;
`;