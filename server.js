const express = require('express');
const app = express();
const port = 3000; // 서버와 클라이언트 분리, 분리된 서버가 클라이언트에서 동작확인을 위해
const path = require('path');
const cors = require('cors'); // cors 패키지를 불러오기
// 출처가 다른 서버에서 이미지나 데이터를 로드하려고 할 때, 이 정책으로 인해 보안 문제가 발생
app.use(cors()); // 모든 라우트에 대해 CORS를 활성화

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // JSON 파싱 미들웨어 추가

// 좋아요한 노래 데이터 저장용 배열
const likedSongsData = [];

// 좋아요한 노래 목록 가져오기
app.get("/likedSongs", (_, res) => {
  res.json(likedSongsData);
});

// 좋아요한 노래 추가하기 
app.post("/likedSongs", (req, res) => {
  const likedSongData = req.body;

  // 이미 좋아요한 노래인지 확인
  const existingLikedSong = likedSongsData.find(
    (songData) => songData.index === likedSongData.index
  );

  if (!existingLikedSong) {
    // 좋아요한 노래 목록에 추가
    likedSongsData.push(likedSongData);
    res.json({ message: "좋아요한 노래가 성공적으로 추가되었습니다." });
  } else {
    res.status(400).json({ error: "이미 좋아요한 노래입니다." });
  }
});

app.get("/main/Music_player_Jazz", (_, res) => { // 엔드포인트 주소, 서버가 클라이어튼에게 전달할 데이터, Jazz 데이터
  const songsData = [
    {
      name: 'Catch It',
      singer:'Music_for_Videos',
      cover: '/songImages/catch_it.jpg',
      musicSrc: '/songs/catch-it-117676.mp3',
      index: "1"
    },
    {
      name: 'fun times together',
      singer:'Musictown',
      cover: '/songImages/funtimestogether.jpg',
      musicSrc: '/songs/fun-times-together-112809.mp3',
      index: "2"
    },
    {
      name: 'happy cooking show',
      singer:'Music_for_Videos',
      cover: '/songImages/happycookingshow.jpg',
      musicSrc: '/songs/happy-cooking-show-111370.mp3',
      index: "3"
    },
    {
      name: 'Old-World-Saga-Hanu-Dixit',
      singer: 'Hanu Dixit',
      cover: '/songImages/cup.jpg',
      musicSrc: '/songs/Old-World-Saga-Hanu-Dixit.mp3',
      index: "4"
    },
    {
      name: 'Relaxing',
      singer: 'Music_For_Videos',
      cover: '/songImages/relax.jpg',
      musicSrc: '/songs/relaxing-145038.mp3',
      index: "5"
    },
    {
      name: 'Eco Technology',
      singer: 'Lexin_Music',
      cover: '/songImages/Ecoechnology.jpg',
      musicSrc: '/songs/Old-World-Saga-Hanu-Dixit.mp3',
      index: "6"
    },
    {
      name: 'Ambient Classical Guitar',
      singer: 'William_King',
      cover: '/songImages/Ambient.jpg',
      musicSrc: '/songs/ambient-classical-guitar-144998.mp3',
      index: "7"
    }
];

  res.json(songsData);
});

app.get("/main/Music_player_Idol", (_, res) => { // 엔드포인트 주소, 서버가 클라이어튼에게 전달할 데이터, Idol 데이터
  const songsData = [
    {
      name: '',
      singer:'',
      cover: '',
      musicSrc: '',
      index: ''
    },

];

  res.json(songsData);
});

app.get("/main/Music_player_Bgm", (_, res) => { // 엔드포인트 주소, 서버가 클라이어튼에게 전달할 데이터, Bgm 데이터
  const songsData = [
    {
      name: '',
      singer:'',
      cover: '',
      musicSrc: '',
      index: ''
    },

];

  res.json(songsData);
});

const userDatabase = []; // 사용자 정보 저장

app.post("/Join", (req, res) => {
  const userData = req.body;
  userDatabase.push(userData); // 사용자 정보 저장
  res.json({ message: "사용자가 성공적으로 등록되었습니다" }); // 클라이언트에게 메세지 전달
});

app.post("/", (req, res) => { // 로그인 처리를 위한 엔드포인트
  const { inputIdValue, inputPassValue } = req.body;

  if (inputIdValue.length === 0 || inputPassValue.length === 0) {
    return res.status(400).json({ error: "아이디와 비밀번호를 모두 입력해야 합니다." });
  }

  // userDatabase 배열에서 해당 사용자 정보를 찾아 검증
  const foundUser = userDatabase.find(user => user.inputIdValue === inputIdValue && user.inputPassValue === inputPassValue);

  if (foundUser) {
    res.json({ message: "로그인 성공", user: foundUser });
  } else {
    res.status(401).json({ message: "아이디 또는 비밀번호가 잘못되었습니다." });
  }
});

app.listen(3000, () => {
  console.log(`
    서버 실행 중입니다.
    라이브러리 실행 중입니다.
    Jazz 노래 실행 중입니다.
    Idol 노래 실행 중입니다.
    Bgm 노래 실행 중입니다.
    로그인, 회원가입 로직 실행 중입니다.
    http://localhost:${port}
    `);
});