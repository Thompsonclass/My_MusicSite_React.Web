import React, {useRef, useState} from "react";
import styled from 'styled-components';
import WaveForm from "./WaveForm";
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목
import {AppContainer, Title, AudioControls, Audio, AnalyzeButton} from "../../Styled/ReadAppSongEqList.styled";

// 새로운 스타일 컴포넌트인 VisualizerWrapper를 생성
const VisualizerWrapper = styled.div `
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 70%;
  border: 2px solid #000;
  background-color: #fff;
  overflow: hidden; /* 자식 컴포넌트가 영역을 벗어나면 숨김 처리 */
`;

const AppSongEqList = () => {
    // 오디오 URL을 관리하는 상태
    const [audioUrl, setAudioUrl] = useState("/songs/best-time-112194.mp3");
    // 아날라이저 데이터를 저장하는 상태
    const [analyzerData, setAnalyzerData] = useState(null);
    // 오디오 엘리먼트에 대한 참조
    const audioElmRef = useRef(null);

// 오디오 아날라이저를 설정하는 함수
const audioAnalyzer = () => {
  // 오디오 컨텍스트를 생성
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  // 아날라이저 노드를 생성
  const analyzer = audioCtx.createAnalyser();
  // 주파수 분석을 위한 FFT 크기 설정
  analyzer.fftSize = 2048;

  // 버퍼 길이를 얻고 주파수 데이터를 저장할 Uint8Array를 생성
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  // 오디오 엘리먼트에서 미디어 엘리먼트 소스를 생성
  const source = audioCtx.createMediaElementSource(audioElmRef.current);

  // 기존에 연결된 소스의 연결을 해제
  source.disconnect();

  // 소스를 아날라이저와 대상(출력)에 연결
  source.connect(analyzer);
  source.connect(audioCtx.destination);

  // 오디오 종료시의 이벤트 핸들러
  source.onended = () => {
      source.disconnect();
  };

  // 상태에 아날라이저 데이터 설정
  setAnalyzerData({ analyzer, bufferLength, dataArray });
};

    return (
    <> 
    < AppSongMainTitle /> {/* VisualizerWrapper로 감싼 영역 추가 */
    } < VisualizerWrapper > <AppContainer>
        <Title>오디오 비주얼라이저</Title>
        {/* 아날라이저 데이터를 사용하여 WaveForm 컴포넌트 렌더링 */}
        {analyzerData && <WaveForm analyzerData={analyzerData}/>}
        {/* 오디오 컨트롤 및 오디오 분석을 시작하는 버튼 */}
        <AudioControls>
            {/* 컨트롤이 있는 오디오 엘리먼트 */}
            <Audio src={audioUrl} controls="controls" ref={audioElmRef}/> {/* 오디오 분석을 시작하는 버튼 */}
            <AnalyzeButton onClick={audioAnalyzer}>오디오 분석 시작</AnalyzeButton>
        </AudioControls>
    </AppContainer>
</VisualizerWrapper> </>
    );
};

export default AppSongEqList;