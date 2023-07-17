const express = require('express');
const app = express(); //객체 생성
const path = require('path');

// 사용자가 GET 요청을 보내면 해당 핸들러가 실행

app.use(express.static(path.join(__dirname, 'public')));

app.get('/songImages/jazzhappy.jpg', (_, res) => {
  const filePath = path.join(__dirname, 'public/songImages', 'jazzhappy.jpg');
  res.sendFile(filePath);
});

app.get('/songs/catch-it-117676.mp3', (_, res) => {
  const filePath = path.join(__dirname, 'public/songs', 'catch-it-117676.mp3');
  res.sendFile(filePath);
});


app.listen(3000, () => { // 3000번 포트에서 실행
  console.log('서버 실행 중입니다');
});

//express모듈은 node.js에서 웹 서버를 만들기 위해 사용