import React from 'react';

const AppCssTopList = () => { 

  const TopList = {
    display: "flex",
    alignItems: "center", // 수직 축을 기준으로 중앙에 정렬
    justifyContent: "center", //수평 축을 기준으로 중앙에 정렬
    background: "lightgray",
    height: "160px",
  };

  return (
    <div style={TopList}>

    </div>
  );
}

export default AppCssTopList;