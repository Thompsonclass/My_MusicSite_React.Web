import React from "react";
import ReactWaves from "@dschoon/react-waves";
import { useGlobalStateContext } from '../../Component_GlobalState/GlobalStateContent';

function MusicSpectrumPlay({ song }) {
    const { trackIndex, playing } = useGlobalStateContext(); // trackIndex: 노래 리스트 인덱스 0 부터 ~ n 까지, playing 재생 여부


    return (
        <>
            {
                trackIndex === song.index && (
                    <ReactWaves
                        audioFile={song.musicSrc}
                        options={{
                            barWidth: 1,
                            cursorWidth: 0,
                            height: 70,
                            hideScrollbar: true,
                            responsive: true,
                        }}
                        zoom={1}
                        playing={playing}
                    />
                )
            }
        </>
    );
}

export default MusicSpectrumPlay;
