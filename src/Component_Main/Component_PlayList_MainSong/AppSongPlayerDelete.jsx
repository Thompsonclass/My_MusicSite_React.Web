import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [list, setList] = useState([]); // 리스트 상태를 초기화

  const handleButtonAllDeleteClick = () => {
    // 버튼을 클릭하면 리스트를 빈 리스트로 초기화
    setList([]);
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
