import React, { useState } from 'react';
import AppCssLeftList from './Component_MainFixed_Top_Left/AppCssLeftList';
import AppCssTopList from './Component_MainFixed_Top_Left/AppCssTopList';
import LoginApp from '../Component_Authentication/LoginApp';

function AppSongPlayList() {
  const [appSongMainShow, setAppSongMainShow] = useState(false);

  const AlldownDivStyle = {
    flexDirection: 'row', //수직
  };
  const SongListBox = {
    display: 'flex',
    alignItems: 'center', // 중심 방향으로 정렬
    justifyContent: 'space-between', // 수평 방향으로 정렬
    padding: '10px',
    margin: '10px',
    border: '1px solid black',
    width: '500px',
  };

  return (
    <>
      {!appSongMainShow ? (
        //로그인 화면에 true값이 반환되면 setAppSongMainShow가 상태값 변경
        <LoginApp setAppSongMainShow={setAppSongMainShow} /> 
      ) : (
        <> 
          <AppCssTopList />
          <AppCssLeftList />
          <div style={AlldownDivStyle}>
            <div>
              <div style={SongListBox}>
                <div>
                  <h3>제목</h3>
                  <p>노래</p>
                </div>
                <div>
                  <button>즐겨찾기 추가</button>
                </div>
              </div>
              <div style={SongListBox}>
                <div>
                  <h3>제목</h3>
                  <p>노래</p>
                </div>
                <div>
                  <button>즐겨찾기 추가</button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </>
      )}
    </>
  );
}

export default AppSongPlayList;