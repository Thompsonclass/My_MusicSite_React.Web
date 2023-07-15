const express = require('express');
const app = express(); //객체 생성
const path = require('path');

app.get('/songs/jazz-happy', (_, res) => { //사용자가 get요청을 보내면 해당 핸들러가 실행
  const filePath = path.join(__dirname, 'jazz-happy-110855.mp3');
  res.sendFile(filePath);
});

app.listen(3000, () => { //3000번 포트에서 실행
  console.log('서버 실행 중입니다');
});

//express모듈은 node.js에서 웹 서버를 만들기 위해 사용