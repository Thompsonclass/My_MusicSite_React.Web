import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TitleWrapper = styled.div`
  background: transparent; /* 배경을 투명하게 설정 */
  border: 2px solid black; /* 태두리를 진한 회색으로 설정 */
  padding: 20px;
  text-align: center;
  margin-left: 10px;
  height: 23em;
`;

const NoticeText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.button`
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

function AppSongAppendTitle() {
    const navigate = useNavigate();
  return (
    <TitleWrapper>
      <NoticeText>노래 추가하기</NoticeText>
      <Button onClick={(()=>{navigate('/main/Music_player_main');})}>추가하기</Button>
    </TitleWrapper>
  );
}

export default AppSongAppendTitle;
