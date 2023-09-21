import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppSongBackgroundBtn } from '../../../Styled/ReadSongKindBtn.styled'

function AppSongRomanticBtn() {
  const navigate = useNavigate();
  
  const RomanticInBtn = () => {
    navigate('/main/Music_player_main/Romantic_List');
  }

  return (
    <AppSongBackgroundBtn onClick={RomanticInBtn}>
        Romantic
    </AppSongBackgroundBtn>
  );
}

export default AppSongRomanticBtn;
