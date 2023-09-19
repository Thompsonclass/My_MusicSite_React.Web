import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Axios를 사용하여 HTTP 요청을 보냅니다.

const DeleteWallpaper = styled.div`
    display: flex;
    justify-content: center; /* 가로 가운데로 정렬 */
    align-items: center; /* 세로 가운데로 정렬 */
    height: 5em;
    margin-left: 10px;
    width: 10em;
`;

const ButtonAllDelete = styled.button`
    background-color: #333;
    color: white;
    border: none; /* 테두리 제거 */
    cursor: pointer;
    height: 4em;
    width: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }
`;

function AppSongPlayerDelete() {
  const [list, setList] = useState([]);

  const handleButtonAllDeleteClick = () => {
    // 서버로 HTTP DELETE 요청을 보내어 노래 목록 삭제
    axios.delete('/likedSongsDelete')
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <DeleteWallpaper>
      <ButtonAllDelete onClick={handleButtonAllDeleteClick}>전체 삭제</ButtonAllDelete>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </DeleteWallpaper>
  );
}

export default AppSongPlayerDelete;
