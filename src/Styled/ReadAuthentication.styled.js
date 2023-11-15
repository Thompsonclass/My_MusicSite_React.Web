import styled, {keyframes} from 'styled-components';

export const StyledMainHomeWrapper = styled.div `
  position: fixed;
  top: 0;
  right: 0;
  width: 70%; 
  height: 100%;
  background-color: lightgreen;
  overflow: hidden;
  border-left: 10px solid green;
`;

export const slide = keyframes `
  0% {
    transform: translateX(100%);
  }
  10% {
    transform: translateX(0);
  }
  90% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Text = styled.div `
  animation: ${slide} 5s ease infinite;
  font-size: 2em; 
  /* 가운데 정렬 */
  position: absolute;
  top: 30%;
  left: 20%; 
  transform: translateX(-50%); 
`;