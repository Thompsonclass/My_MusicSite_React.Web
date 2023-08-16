const response = await fetch('https://cdn.data.com/audio.mp3');
const arrayBuffer = await response.arrayBuffer();

const audioCtx = new AudioContext()
const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
const rawData = audioBuffer.getChannelData(0)

const samplesPerSec = 100 // 1초당 표시할 샘플의 수
const {
  duration, // 오디오 길이 (초 단위)
  sampleRate, // 샘플링 레이트. 보통 48000 또는 44100.
} = audioBuffer;

const rawData = audioBuffer.getChannelData(0); // 첫번쨰 채널의 AudioBuffer
const totalSamples = duration * samplesPerSec; // 구간 처리 후 전체 샘플 수
const blockSize = Math.floor(sampleRate / samplesPerSec); // 샘플링 구간 사이즈
const filteredData: number[] = [];

for (let i = 0; i < totalSamples; i++) {
  const blockStart = blockSize * i; // 샘플 구간 시작 포인트
  let blockSum = 0;

  for (let j = 0; j < blockSize; j++) {
    if (rawData[blockStart + j]) {
      blockSum = blockSum + Math.abs(rawData[blockStart + j]); 
    }
  }

  filteredData.push(blockSum / blockSize); // 구간 평균치를 결과 배열에 추가
}

const normalizeData = (filteredData: number[]) => {
  const peak = Math.max(...filteredData);
  const multiplier = Math.pow(peak, -1);
  return filteredData.map((n) => n * multiplier);
};

window.requestAnimationFrame(callback)

class AudioPlayer {

	drawWaveForm = () = {
	   // Canvas API를 사용한 오디오 파형 그리기 구현
  }

  rafId = -1;

  startDraw = () = 
    this.drawWaveForm();
    this.rafId = requestAnimationFrame(() =>
      this.startDraw(),
    );
  }

	stopDraw = () = 
	  cancelAnimationFrame(this.rafId);
  }
}

<canvas id="my-house" width="300" height="300"></canvas> 
const canvas = document.getElementById('my-house');
const ctx = canvas.getContext('2d');