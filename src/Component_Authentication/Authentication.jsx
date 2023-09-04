import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledMainHomeWrapper = styled.div`
  position: fixed;
  top: 0; /* 위에서 부터 0위치*/
  right: 0; /* 오른쪽 부터 0위치 */
  width: 70em;
  height: 100%;

  background-color: lightgreen;
  overflow: hidden;
  border-left: 10px solid green;
`;

// CSS 애니메이션 키프레임 정의
const slide = keyframes`
  0% {
    transform: translateX(100%); /* 시작 위치: 오른쪽에서 왼쪽으로 이동 */
  }
  10% {
    transform: translateX(0); /* 10% 시점: 정지하여 화면에 보임 */
  }
  90% {
    transform: translateX(0); /* 90% 시점: 정지하여 화면에 보임 */
  }
  100% {
    transform: translateX(0%); /* 끝 위치: 왼쪽으로 사라짐 */
}
`;

// 스타일드 컴포넌트로 Text 컴포넌트 정의
const Text = styled.div`
  animation: ${slide} 5s ease infinite; /* 애니메이션 적용: 5초 동안 반복 */

  position: absolute; /* 절대 위치 지정 */
  top: 30%; 
  left: 20%; 
  transform: translate(-50%, -50%); 

  font-size: 40px; 
`;

function LoginBackground() {


  return (
    <StyledMainHomeWrapper>
      <Text>
        <h2>Start Your Musical Journey with Us</h2>
        <p>Download the app and immerse yourself in the world of melody and rhythm.</p>
      </Text> 
    </StyledMainHomeWrapper>
  );
}

export default LoginBackground;