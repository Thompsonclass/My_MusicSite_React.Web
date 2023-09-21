import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppSongBackgroundBtn } from '../../../Styled/ReadSongKindBtn.styled'

function AppSongClassicBtn() {
  const navigate = useNavigate();
  
  const IdolInBtn = () => {
    navigate('/main/Music_player_main/Classic_List');
  }

  return (
    <AppSongBackgroundBtn onClick={IdolInBtn}>
        Classic
    </AppSongBackgroundBtn>
  );
}

export default AppSongClassicBtn;
