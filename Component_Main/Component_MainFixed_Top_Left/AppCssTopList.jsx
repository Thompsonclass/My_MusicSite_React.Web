import React from 'react';

function AppCssTopList() { 
  const TopList = { //div css
    background: "pink",
    height: "160px",
    display: "flex",
    alignItems: "center", // 수직 축을 기준으로 중앙에 정렬
    justifyContent: "center", //수평 축을 기준으로 중앙에 정렬
  };

  const btn = { //버튼
    padding: "20px",
    margin: "10px",
    fontSize: "18px",
    border: "2px solid black",
    background: "lightgray",
  };

  return (
    <div style={TopList}>
      <div>
      <button style={btn}>메인 화면</button>
        <button style={btn}>노래 목록</button>
        <button style={btn}>즐겨찾기 목록</button>
      </div>
    </div>
  );
}

export default AppCssTopList;