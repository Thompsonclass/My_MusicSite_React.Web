import styled from 'styled-components'

export const AppSongBackgroundBtn = styled.button `
  width: 325px;
  height: 300px;
  background-color: lightgray;
  border-radius: 12px;
  border: none;
  margin: 20px; 
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.2s ease-in-out; /* 전체 속성에 부드러운 변화 적용 */

  display: inline-block; /* 인라인 블록 요소 */
  position: relative; /* 상대적인 위치 지정 */
  overflow: hidden; /* 내용이 넘칠 때 숨김 처리 */
  
  /* 가상 요소를 사용하여 왼쪽에서 들어오는 효과 생성 */
  &:before {
    content: ""; /* 내용 없는 가상 요소 */
    background-color: rgba(255, 255, 255, 0.5); /* 배경색과 반투명도 */
    height: 100%; /* 높이 100% */
    width: 3em; /* 너비 3em */

    display: block; /* 블록 요소로 표시 */
    position: absolute; /* 절대적인 위치 지정 */
    top: 0; /* 위쪽에 붙임 */
    left: -4em; /* 왼쪽으로 이동하여 숨김 */
    transform: skewX(-45deg) translateX(0); /* 기울임과 이동 적용 */
  }
  
  /* 마우스 호버 시의 스타일 변화 */
  &:hover {
    background-color: $color; /* 배경색 변경 */
    color: #fff; /* 글자 색상 하양색 변경 */
    
    /* 가상 요소의 변화 설정 */
    &:before {
      transform: skewX(-45deg) translateX(13.5em); /* 왼쪽에서 오른쪽으로 이동하며 보임 */
      transition: all 0.5s ease-in-out; /* 변화에 부드러운 효과 적용 */
    }
  }
}
`;