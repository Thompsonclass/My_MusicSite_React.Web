import React from "react";
import ReactWaves from "@dschoon/react-waves";
import {useGlobalStateContext} from '../../Component_GlobalState/GlobalStateContent';

function MusicSpectrumPlay({song, playing}) {
    const {trackIndex} = useGlobalStateContext(); //trackIndex : 노래 리스트 인덱스 0 부터 ~ n 까지

    return (
        <div>
            {
                trackIndex === song.index && playing && (
                    <ReactWaves
                        audioFile={song.musicSrc}
                        options={{
                            barWidth: 1, // 웨이브의 바(진행 상태 바) 너비를 설정합니다.
                            cursorWidth: 0, // 커서의 너비
                            height: 70, // 오디오 시각화의 높이
                            hideScrollbar: true, // 스크롤바 숨김 여부
                            responsive: true, // 반응형 디자인 사용 여부
                        }}
                        zoom={1}
                        playing={playing}/>
                )
            }
        </div>
    );
}

export default MusicSpectrumPlay;