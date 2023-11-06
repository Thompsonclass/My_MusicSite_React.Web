import React from 'react';
import {useNavigate} from 'react-router-dom';
import {TitleWrapper, NoticeText, Button} from '../../Styled/ReadAppSongAppendTitle.styled'

function AppSongAppendTitle() {
    const navigate = useNavigate();
    return (
        <TitleWrapper>
            <NoticeText>노래 추가하기</NoticeText>
            <Button
                onClick={(() => {
                    navigate('/main/Music_player_main');
                })}>추가하기</Button>
        </TitleWrapper>
    );
}

export default AppSongAppendTitle;
