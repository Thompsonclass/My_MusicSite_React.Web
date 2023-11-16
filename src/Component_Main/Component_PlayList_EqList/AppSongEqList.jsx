import React, { useRef, useState } from "react";
import WaveForm from "./WaveForm";
import {AppContainer, Title, AudioControls, Audio, AnalyzeButton} from "../../Styled/ReadAppSongEqList.styled"

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
    <AppContainer>
      <Title>Audio Visualizer</Title>
      {analyzerData && <WaveForm analyzerData={analyzerData} />}
      <AudioControls>
        <Audio src={audioUrl} controls ref={audioElmRef} />
        <AnalyzeButton onClick={audioAnalyzer}>Analyze Audio</AnalyzeButton>
      </AudioControls>
    </AppContainer>
  );
};

export default AppSongEqList;
