import React from 'react';
import ReactWaves from "@dschoon/react-waves";
import { useGlobalStateContext } from '../../Component_GlobalState/GlobalStateContent';

const MusicSpectrumPlay = ({ song, index }) => {
  // GlobalStateContext를 통해 현재 재생 중인 상태(playing)와 현재 트랙의 인덱스(currentTrackIndex)를 가져옴
  const { playing, currentTrackIndex } = useGlobalStateContext();

  return (
    <>
      {/* playing이 true이고 현재 트랙의 인덱스가 현재 매핑되고 있는 인덱스와 같을 때에만 렌더링 */}
      {playing && currentTrackIndex === index && (
        <ReactWaves
          audioFile={song.musicSrc}
          options={{
            barWidth: 1,           // 웨이브의 바(진행 상태 바) 너비를 설정
            cursorWidth: 0,        // 커서의 너비
            height: 70,            // 오디오 시각화의 높이
            hideScrollbar: true,   // 스크롤바 숨김 여부
            responsive: true,      // 반응형 디자인 사용 여부
          }}
          zoom={1}
          playing={playing}
        />
      )}
    </>
  );
};

export default MusicSpectrumPlay;
