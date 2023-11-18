import styled from "styled-components";

export const TitleWrapper = styled.div `
  background: transparent; // 배경을 투명하게 설정
  border: 3px solid black; // 태두리를 진한 회색으로 설정
  padding: 20px; // 안쪽 여백을 20px로 설정
  text-align: center; // 텍스트를 가운데 정렬
  margin-left: 1em; // 왼쪽 여백을 1em으로 설정
  height: 23em; // 높이를 23em으로 설정
  width: 111em; // 너비를 111em으로 설정
`;

export const NoticeText = styled.div `
  font-size: 25px; // 글꼴 크기를 25px으로 설정
  font-weight: bold; // 글꼴을 굵게 설정
`;

export const Button = styled.button `
  background-color: #333; // 배경 색상을 어두운 회색(#333)으로 설정
  color: white; // 글자 색상을 흰색으로 설정
  padding: 10px 20px; // 안쪽 여백을 10px 위아래, 20px 좌우로 설정
  border: none; // 테두리 없음
  cursor: pointer; // 마우스 포인터를 손가락 형태로 변경
  font-size: 16px; // 글꼴 크기를 16px으로 설정
  margin-top: 10px; // 위쪽 여백을 10px으로 설정
  transition: background-color 0.3s ease; // 배경 색상 변경 시 0.3초 동안 부드럽게 변화하도록 설정

  &:hover {
    background-color: #555; // 마우스 호버 시 배경 색상을 어두운 회색(#555)으로 변경
  }
`;