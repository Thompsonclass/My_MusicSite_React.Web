import React from 'react';

function AppCssTopList() {
  const TopList = {
    background: "pink",
    height: "100px",
  };

  return (
    <div style={TopList}>
      <button>노래 목록</button>
      <button>즐겨찾기 목록</button>
    </div>
  );
}

export default AppCssTopList;
