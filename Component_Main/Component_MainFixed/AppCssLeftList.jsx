import React from 'react';

function AppCssLeftList() {

  const LeftList = {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'center',
    background: 'gray',
    height: '800px',
    width: '480px',
    overflow: 'auto', // 스크롤 적용
  };

  return  (
    <div style={LeftList}>


    </div>
  )
}

export default AppCssLeftList;