// animateBars.js

// 오디오 데이터를 기반으로 캔버스에 막대 형태의 그래픽을 그리는 함수
function animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength) {
  // 오디오 분석 데이터 획득
  analyzer.getByteFrequencyData(dataArray);

  // 캔버스 스타일 초기화
  canvasCtx.fillStyle = '#000';

  // 캔버스 높이 설정
  const HEIGHT = canvas.height / 2;

  // 막대의 너비 설정
  var barWidth = Math.ceil(canvas.width / bufferLength) * 1.5;

  let barHeight;
  let x = 0;

  // 주어진 오디오 데이터를 기반으로 막대 형태의 그래픽 그리기
  for (var i = 0; i < bufferLength; i++) {
    // 막대의 높이 계산
    barHeight = (dataArray[i] / 800) * HEIGHT;

    // 색상 랜덤값 생성
    const maximum = 10;
    const minimum = -10;
    var r = 242 + Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var g = 0 + Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var b = 65 + Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    // 막대의 위치, 크기 및 색상 설정 후 캔버스에 그리기
    canvasCtx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

    // 다음 막대의 X 좌표 계산
    x += barWidth + 1;
  }
}

export default animateBars;
