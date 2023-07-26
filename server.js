const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors'); // cors 패키지를 불러오기

app.use(cors()); // 모든 라우트에 대해 CORS를 활성화

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/songs', (_, res) => { //주소
  const songsData = [
    {
      title: 'Catch It',
      name_sources:'Music_for_Videos',
      jpg: '/songImages/catch_it.jpg',
      musicSrc: '/songs/catch-it-117676.mp3',
    },
    {
      tilte: 'fun times together',
      name_sources:'Musictown',
      jpg: '/songImages/funtimestogether.jpg',
      musicSrc: '/songs/fun-times-together-112809.mp3',
    },
    {
      title: 'happy cooking show',
      name_sources:'Music_for_Videos',
      jpg: '/songImages/happycookingshow.jpg',
      musicSrc: '/songs/happy-cooking-show-111370.mp3',
    },
    // 다른 노래 데이터 추가
  ];

  res.json(songsData);
});

app.listen(3000, () => {
  console.log('서버 실행 중입니다');
});