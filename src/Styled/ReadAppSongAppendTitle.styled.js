import styled from "styled-components"

export const TitleWrapper = styled.div `
  background: transparent; /* 배경을 투명하게 설정 */
  border: 3px solid black; /* 태두리를 진한 회색으로 설정 */
  padding: 20px;
  text-align: center;
  margin-left: 1em;
  height: 23em;
  width: 111em;
`;

export const NoticeText = styled.div `
  font-size: 25px;
  font-weight: bold;
`;

export const Button = styled.button `
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
      background-color: #555;
  }
`;