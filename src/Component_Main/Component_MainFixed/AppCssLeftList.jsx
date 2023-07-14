import React, {memo} from 'react';

const AppCssLeftList = memo(() => {

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
});

export default AppCssLeftList;