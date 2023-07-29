import React, { useState, useEffect } from 'react';

function AppSongFavoriteList() {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    document.title = '즐겨찾기 목록';
  }, []);

  return (
    <>
      <h1>다음은 원하는 노래 리스트 컴포넌트입니다.</h1>
      <ul>
        {favoriteSongs.map((song, _) => (
          <li>{song}</li>
        ))}
      </ul>
    </>
  );
}

export default AppSongFavoriteList;