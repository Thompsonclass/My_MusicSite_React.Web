import React from 'react';
import {useNavigate} from 'react-router-dom';
import {AppSongBackgroundBtn} from '../../../Styled/ReadSongKindBtn.styled'

function AppSongBgm() {
    const navigate = useNavigate();

    const AppSongBgm = () => {/* 재즈 노래 버튼 */
        navigate('/main/Music_player_main/Bgm_List')
    }

    return (
        <AppSongBackgroundBtn onClick={AppSongBgm}>
            B g m
        </AppSongBackgroundBtn>
    )
}

export default AppSongBgm;