import React from 'react';

function AppSongPlayList() {
  const backStyleFloor = {
    background: "pink",
    height: "100px",
  };
  const AlldownDivStyle = {
    flexDirection: "row"
  }
  const leftDivStyle = {
    display: "flex",
    flexDirection: "column", // 수직 방향으로 정렬
    width: "20%",
    height : "100%",
    background : "cyan",
  };

  const playlistStyle = {
    display: "flex",
    alignItems: "center", // 중심 방향으로 정렬
    justifyContent: "space-between", // 수평 방향으로 정렬
    padding : "10px",
    margin : "10px",
    border: "1px solid black",
  };

  return (
    <div>
      <div style={backStyleFloor}>각 아이콘 지정</div>
      <div style={leftDivStyle}>
        <div style={playlistStyle}>
          <div>
            <h3>제목</h3>
            <p>노래</p>
          </div>
          <div>
            <button>즐겨찾기 추가</button>
          </div>
        </div>
        <div style={playlistStyle}>
          <div>
            <h3>제목</h3>
            <p>노래</p>
          </div>
          <div>
            <button>즐겨찾기 추가</button>
          </div>
        </div>
      </div>
      <div>
        CD 로직
      </div>
    </div>
  );
}

export default AppSongPlayList;