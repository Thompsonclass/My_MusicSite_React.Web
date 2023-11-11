import styled from 'styled-components'

export const AppSongMainTitleBackground = styled.div `
  display: flex;
  flex-direction: row; /* 가로 설정 */
  `;

export const Title = styled.h1 `
  font-family: serif;
  color: black;
  margin-left: 1em;
  margin-top: 1em;
  font-size: 35px;

  position: relative; /* 자식 요소를 기준으로 z-index 값을 설정합니다. */
  z-index: 2; /* 숫자가 높을수록 위에 위치합니다. */
`;

export const Solid = styled.hr `
  width: 100%;
  border: 2px solid #808080;
  margin-top: 40px;

  position: relative; /* 자식 요소를 기준으로 z-index 값을 설정합니다. */
  z-index: 3; /* 숫자가 높을수록 위에 위치합니다. */
`;

export const SiderDiv = styled.div `
  margin-left: 3em;
  margin-top: 2em;

  position: relative; /* 자식 요소를 기준으로 z-index 값을 설정합니다. */
  z-index: 1; /* 숫자가 높을수록 위에 위치합니다. */
`;

export const WaveDiv = styled.div `
  width: 100%;

  position: absolute; /* 절대 위치로 설정하여 다른 컴포넌트와 겹치게 합니다. */
  top: 0%; /* 원하는 위치로 조정합니다. */
  left: 0%; /* 원하는 위치로 조정합니다. */
`;