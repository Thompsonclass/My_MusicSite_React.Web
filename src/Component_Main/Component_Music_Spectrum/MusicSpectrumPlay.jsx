import React, { useState, useEffect } from "react";
import ReactWaves from "@dschoon/react-waves";
import axios from "axios";
import { useGlobalStateContext } from '../../Component_GlobalState/GlobalStateContent';

function MusicSpectrumPlay() {

  const [audioData, setAudioData] = useState([]); // 모든 노래 데이터를 관리하는 상태
  const { trackIndex, playing } = useGlobalStateContext(); // GlobalStateProvider로부터 trackIndex 가져오기

  useEffect(() => {
    // 서버에서 노래 데이터를 가져옴
    axios.get('http://localhost:3000/api/songs')
      .then((response) => {
        // 가져온 노래 데이터를 상태에 설정
        setAudioData(response.data);
      })
      .catch((error) => {
        console.error(error); // 에러 메시지를 콘솔에 출력
      });
  }, []); // 빈 배열은 마운트될 때 한 번만 실행


  return (
    <>
      {audioData.map((song, index) => (
        <div>
          {index === trackIndex && (
            <ReactWaves
              audioFile={song.musicSrc}
              className={"react-waves"}
              options={{
                backend: "MediaElement",
                normalize: true,
                cursorWidth: 0,
                mediaType: "audio",
                hideScrollbar: true,
                responsive: true,
              }}
              zoom={1}
              playing={playing}
            />
          )}
        </div>
      ))}
    </>
  );
}

export default MusicSpectrumPlay;
