// App.js

import { useRef, useState } from "react";
import WaveForm from "./WaveForm";

const AppSongEqList = () => {
  const [audioUrl, setAudioUrl] = useState("/songs/best-time-112194.mp3");
  const [analyzerData, setAnalyzerData] = useState(null);
  const audioElmRef = useRef(null);

  const audioAnalyzer = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyzer = audioCtx.createAnalyser();
    analyzer.fftSize = 2048;

    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const source = audioCtx.createMediaElementSource(audioElmRef.current);
    source.connect(analyzer);
    source.connect(audioCtx.destination);
    source.onended = () => {
      source.disconnect();
    };

    setAnalyzerData({ analyzer, bufferLength, dataArray });
  };

  return (
    <div className="App">
      <h1>Audio Visualizer</h1>
      {analyzerData && <WaveForm analyzerData={analyzerData} />}
      <div
        style={{
          height: 80,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        {/* 파일 입력 대신 하드코딩된 오디오 URL을 사용합니다. */}
        <audio src={audioUrl} controls ref={audioElmRef} />
        <button onClick={audioAnalyzer}>Analyze Audio</button>
      </div>
    </div>
  );
}

export default AppSongEqList;