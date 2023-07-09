import React, { useEffect } from 'react';

function AppSongFavoriteList() {
  useEffect(() => {
    document.title = '즐겨찾기 목록';
  }, []);

  return (
    <>
     <h1>다음은 원하는 노래 리스트 컴포넌트입니다.</h1>
    </>
  );
}

export default AppSongFavoriteList;