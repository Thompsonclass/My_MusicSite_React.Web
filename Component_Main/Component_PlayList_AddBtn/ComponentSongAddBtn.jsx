import React from 'react'

function ComponentAddBtn() {
    const AddBtnStyle = { //버튼 css
        fontSize: "20px",
        border: "2px solid black",
        background: "lightgray",
    }
    const SongAddBtn = { //버튼 클릭 시
      
    }

    const AddBtn = { //버튼 위치 css
      display: "flex",
      justifyContent: "center", //수평 축을 기준으로 중앙에 정렬
      margin: "20px"
    }

  return (
    <div style={AddBtn}>
      <button style={AddBtnStyle} onClick={SongAddBtn}>노래 추가</button>
    </div>
  )
}

export default ComponentAddBtn
