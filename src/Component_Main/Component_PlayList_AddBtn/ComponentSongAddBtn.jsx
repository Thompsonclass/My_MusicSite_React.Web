import React from 'react'

function ComponentSongAddBtn() {
    const AddBtnStyle = { //버튼 css
        fontSize: "20px",
      
        border: "2px solid black",
        background: "lightgray",
        }

    const AddBtn = { //버튼 위치 css
      display: "flex",
      justifyContent: "center", //수평 축을 기준으로 중앙에 정렬
      
    }

  return (
    <div style={AddBtn}>
      <button style={AddBtnStyle}>노래 추가</button>
    </div>
  )
}

export default ComponentSongAddBtn;
