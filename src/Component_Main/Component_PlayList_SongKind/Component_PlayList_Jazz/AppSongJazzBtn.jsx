import React from 'react';
import {useNavigate} from 'react-router-dom';
import {AppSongBackgroundBtn} from '../../../Styled/ReadSongKindBtn.styled'

function AppSongJazz() {
    const navigate = useNavigate();

    const JazzInBtn = () => {/* 재즈 노래 버튼 */
        navigate('/main/Music_player_main/Jazz_List')
    }

    return (
        <AppSongBackgroundBtn onClick={JazzInBtn}>
            J a z z
        </AppSongBackgroundBtn>
    )
}

export default AppSongJazz
