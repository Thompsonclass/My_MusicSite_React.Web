import React from 'react';

const AppCssTopList = (props) => { 
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

  const mainShow = () => {
    //props.setMainShow(true);
  }
  const songList = () => {
    //props.setSongList(true);
  }
  const likeList = () => {
    //props.setLikeList(true);
  }

  return (
    <div style={TopList}>
      <div>
        <button style={btn} onClick={mainShow}>메인 화면</button>
        <button style={btn} onClick={songList}>노래 목록</button>
        <button style={btn} onClick={likeList}>즐겨찾기 목록</button>
      </div>
    </div>
  );
}

export default AppCssTopList;