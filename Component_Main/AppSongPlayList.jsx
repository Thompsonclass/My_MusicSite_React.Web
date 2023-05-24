import React from 'react'
import AppCssTopList from './Component_MainFixed_Top_Left/AppCssTopList';
import ComponentSongAddBtn from './Component_PlayList_AddBtn/ComponentSongAddBtn';
import ComponentPlayListSongKind from './Component_PlayList_Song/ComponentPlayListSongKind';

function AppSongPlayList() {

  return (
    <>
      <AppCssTopList /*메인화면,노래목록,즐겨찾기목록*/ /> 
      <hr />
      <div /*노래 추가 버튼*/>
        <ComponentSongAddBtn />
      </div>
      <hr />
      <div>
        <ComponentPlayListSongKind />
      </div>
    </>
  )
}

export default AppSongPlayList
