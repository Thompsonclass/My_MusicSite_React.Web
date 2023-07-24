const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors'); // cors 패키지를 불러오기

app.use(cors()); // 모든 라우트에 대해 CORS를 활성화

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/songs', (_, res) => {
  const songsData = [
    {
      name: 'Catch It',
      cover: '/songImages/catch_it.jpg',
      musicSrc: '/songs/catch-it-117676.mp3',
    },
    {
      name: 'fun times together',
      cover: '/songImages/funtimestogether.jpg',
      musicSrc: '/songs/fun-times-together-112809.mp3',
    },
    {
      name: 'happy cooking show',
      cover: '/songImages/happycookingshow.jpg',
      musicSrc: '/songs/happy-cooking-show-111370.mp3',
    },
    // 다른 노래 데이터 추가
  ];

  res.json(songsData);
});

app.listen(3000, () => {
  console.log('서버 실행 중입니다');
});