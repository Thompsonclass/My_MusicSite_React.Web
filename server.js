const express = require('express');
const app = express();
const path = require('path');

app.get('/songs/jazz-happy', (req, res) => {
  const filePath = path.join(__dirname, 'jazz-happy-110855.mp3');
  res.sendFile(filePath);
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다!');
});