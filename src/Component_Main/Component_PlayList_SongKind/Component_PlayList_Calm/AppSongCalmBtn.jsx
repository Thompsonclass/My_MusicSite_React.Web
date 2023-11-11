import React from 'react';
import {useNavigate} from 'react-router-dom';
import {AppSongBackgroundBtn} from '../../../Styled/ReadSongKindBtn.styled'

function AppSongCalmBtn() {
    const navigate = useNavigate();

    const CalmInBtn = () => {
        navigate('/main/Music_player_main/Calm_List');
    }

    return (
        <AppSongBackgroundBtn onClick={CalmInBtn}>
            C a l m
        </AppSongBackgroundBtn>
    );
}

export default AppSongCalmBtn;
