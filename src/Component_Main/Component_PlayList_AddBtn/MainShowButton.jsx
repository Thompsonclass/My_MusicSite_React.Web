import React from 'react'

const btn = { //버튼
    padding: "20px",
    margin: "10px",
    fontSize: "18px",
    border: "1px solid black",
    background: "lightgray",
  };
  
function MainShowButton() {
  return (
    <div>
        <div>
            <button style={btn} onClick={mainShow}>메인 화면</button>
            <button style={btn} onClick={songList}>노래 목록</button>
            <button style={btn} onClick={likeList}>즐겨찾기 목록</button>
        </div>
    </div>
  )
}

export default MainShowButton
