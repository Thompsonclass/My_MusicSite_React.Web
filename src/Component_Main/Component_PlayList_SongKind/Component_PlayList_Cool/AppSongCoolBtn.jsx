import React from 'react';
import {useNavigate} from 'react-router-dom';
import {AppSongBackgroundBtn} from '../../../Styled/ReadSongKindBtn.styled'

function AppSongCoolBtn() {
    const navigate = useNavigate();

    const IdolInBtn = () => {
        navigate('/main/Music_player_main/Cool_List');
    }

    return (
        <AppSongBackgroundBtn onClick={IdolInBtn}>
            C o o l
        </AppSongBackgroundBtn>
    );
}

export default AppSongCoolBtn;
