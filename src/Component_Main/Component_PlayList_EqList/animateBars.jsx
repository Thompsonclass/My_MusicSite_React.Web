// animateBars.js

function animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength) {
    analyzer.getByteFrequencyData(dataArray);
    canvasCtx.fillStyle = '#000';
    const HEIGHT = canvas.height / 2;
    var barWidth = Math.ceil(canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;
  
    for (var i = 0; i < bufferLength; i++) {
      barHeight = (dataArray[i] / 255) * HEIGHT;
      const maximum = 10;
      const minimum = -10;
      var r = 242 + Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      var g = 104 + Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      var b = 65 + Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      canvasCtx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  }
  
  export default animateBars;
  