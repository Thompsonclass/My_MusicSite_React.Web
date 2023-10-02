import React, { useState } from 'react';
import { DeleteWallpaper, ButtonAllDelete } from '../../Styled/ReadAppSongPlayerDelete.styled'
import axios from 'axios'; // Axios를 사용하여 HTTP 요청을 보냅니다.

function AppSongPlayerDelete() {
  const [list, setList] = useState([]);

  const handleButtonAllDeleteClick = () => {
    // 서버로 HTTP DELETE 요청을 보내어 노래 목록 삭제
    axios.post('/likedSongsDelete')
      .then((response) => {
        alert(response.data.message);
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
