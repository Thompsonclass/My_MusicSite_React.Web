import React, { useRef, useState } from "react";
import styled from 'styled-components';
import WaveForm from "./WaveForm";
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle';
import { AppContainer, AudioControls, Audio } from "../../Styled/ReadAppSongEqList.styled";
import Test from './App'; 

const VisualizerWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 70%;
  border: 2px solid #000;
  background-color: #fff;
  overflow: hidden;
`;

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

    source.disconnect();
    source.connect(analyzer);
    source.connect(audioCtx.destination);

    source.onended = () => {
      source.disconnect();
    };

    setAnalyzerData({ analyzer, bufferLength, dataArray });
  };

  // Function to handle the play event
  const handlePlay = () => {
    audioAnalyzer();
  };

  return (
    <>
      <AppSongMainTitle />
      <VisualizerWrapper>
        <AppContainer>
          {analyzerData && <WaveForm analyzerData={analyzerData} />}
          <AudioControls>
            <Audio
              src={audioUrl}
              controls="controls"
              ref={audioElmRef}
              onPlay={handlePlay}
            />
          </AudioControls>
          <Test />
        </AppContainer>
      </VisualizerWrapper>
    </>
  );
};

export default AppSongEqList; 