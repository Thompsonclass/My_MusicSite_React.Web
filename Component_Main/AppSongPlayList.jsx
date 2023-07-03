import React, {useEffect} from 'react';
import ComponentSongAddBtn from './Component_PlayList_AddBtn/ComponentSongAddBtn'
import ComponentPlayListSongKind from './Component_PlayList_Song/ComponentPlayListSongKind'

function AppSongPlayList() {
  useEffect(() => {
    document.title = '음악 장르';
  }, []);

  return (
    <> 
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
