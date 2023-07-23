const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/songs', (_, res) => {
  const songsData = [
    {
      name: 'Catch It',
      cover: '/public/songImages/jazzhappy.jpg',
      musicSrc: '/public/songs/catch-it-117676.mp3',
    },
    // 다른 노래 데이터들도 추가
  ];

  res.json(songsData);
});

app.listen(3000, () => {
  console.log('서버 실행 중입니다');
});