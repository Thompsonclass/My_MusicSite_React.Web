import React, { useState } from 'react';

function ComponentPlayListSongKind() {
  const [SongAddList, setSongAddList] = useState(['']);


  const AddSonglist = (index) => {
    const updatedList = [...SongAddList]; // SongAddList 배열의 복사본을 생성합니다.
    if (updatedList[index] === "red") {
      updatedList[index] = ""; // 배경색을 초기 상태로 되돌립니다.
    } else {
      updatedList[index] = "red"; // 배경색을 빨간색으로 설정합니다.
    }
    setSongAddList(updatedList); // 수정된 배열로 상태를 업데이트합니다.
  };

  const SongListBox = { //리스트 크기 css
    display: "flex",
    justifyContent: "space-between", //양쪽 끝 정렬
    padding: "10px",
    margin: "10px",
    border: "2px solid black",
    flexdirection: "column",
    width: "450px",
  };

  const SongListBoxParent = { //줄바꿈
    display: "flex",
    flexWrap: "wrap" //기준이 넘으면 자동 줄바꿈
  };

  const songTitles = [ //노래 데이터
    "제목1", "제목2", "제목3", "제목4", "제목5", "제목6",
    "제목7", "제목8", "제목9", "제목10", "제목11", "제목12"
  ];

  return (
    <div style={SongListBoxParent}> 
      {songTitles.map((data, index) => (
        <div key={index} style={{ ...SongListBox, background: SongAddList[index] }}>
          {data}
          <button onClick={() => AddSonglist(index)}>추가</button>
        </div>
      ))}
    </div>
  );
}

export default ComponentPlayListSongKind;