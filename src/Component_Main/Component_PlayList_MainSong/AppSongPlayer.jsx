import React from 'react';
import binly from '../../songHomeImg/binly.jpg'
import {BackgroundStyled, CdStyled, CdImage} from '../../Styled/ReadAppSongPlayer.styled'

const AppSongPlayer = () => {
    return (
        <BackgroundStyled>
            <div>
                <CdStyled>
                    <CdImage src={binly} alt="CD"/>
                </CdStyled>
            </div>
        </BackgroundStyled>
    );
};

export default AppSongPlayer;