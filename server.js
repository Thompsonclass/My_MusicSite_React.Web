const express = require('express');
const app = express();
const path = require('path');

app.get('/songs/jazz-happy', (_, res) => {
  const filePath = path.join(__dirname, 'jazz-happy-110855.mp3');
  res.sendFile(filePath);
});

app.listen(3000, () => {
  console.log('서버 실행 중입니다');
});