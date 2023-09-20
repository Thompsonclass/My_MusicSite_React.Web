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

// 노래 목록 삭제
app.delete("/likedSongsDelete", (_, res) => {
  likedSongsData.length = 0; // 노래 목록을 비웁니다.
  res.json({ message: "노래 목록이 성공적으로 삭제되었습니다." });
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
 
app.get("/main/Music_player_Calm", (_, res) => { // 엔드포인트 주소, 서버가 클라이어튼에게 전달할 데이터, Calm 데이터
  const songsData = [
    {
      name: 'Reflected Light',
      singer:'SergePavkinMusic',
      cover: '/songImages/ReflectedLight.jpg',
      musicSrc: '/songs/reflected-light-147979.mp3',
      index: '1'
    },
    {
      name: 'Waterfall',
      singer:'RomanSenykMusic',
      cover: '/songImages/Waterfall.jpg',
      musicSrc: '/songs/waterfall-140894.mp3',
      index: '2'
    },
    {
      name: 'The Cradle of Your Soul',
      singer:'lemonmusicstudio',
      cover: '/songImages/TheCradleofYourSoul.jpg',
      musicSrc: '/songs/the-cradle-of-your-soul-15700.mp3',
      index: '3'
    },
    {
      name: 'Modern Chillout',
      singer:'penguinmusic',
      cover: '/songImages/penguinmusic.jpg',
      musicSrc: '/songs/penguinmusic-modern-chillout-future-calm-12641.mp3',
      index: '4'
    },

];

  res.json(songsData);
});

app.get("/main/Music_player_Bgm", (_, res) => { // 엔드포인트 주소, 서버가 클라이어튼에게 전달할 데이터, Bgm 데이터
  const songsData = [
    {
      name: 'Electronic Rock (King Around Here)',
      singer:'AlexGrohl',
      cover: '/songImages/electronic.jpg',
      musicSrc: '/songs/electronic-rock-king-around-here-15045.mp3',
      index: '1'
    },
    {
      name: 'Trailer Sport Stylish',
      singer:'Anton_Vlasov',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/trailer-sport-stylish-16073.mp3',
      index: '2'
    },
    {
      name: 'Abstract Future Bass',
      singer:'QubeSounds',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/abstract-future-bass-162604.mp3',
      index: '3'
    },
    {
      name: 'The Podcast Intro',
      singer:'Music_Unlimited',
      cover: '/songImages/podcast.jpg',
      musicSrc: '/songs/the-podcast-intro-111863.mp3',
      index: '4'
    },
    {
      name: 'Best Time',
      singer:'FASSounds',
      cover: '/songImages/bestTime.jpg',
      musicSrc: '/songs/good-night-160166.mp3',
      index: '5'
    },

];

  res.json(songsData);
});

app.get("/main/Music_player_Classic", (_, res) => { // 엔드포인트 주소, 서버가 클라이어튼에게 전달할 데이터, Classic 데이터
  const songsData = [
    {
      name: 'Sad Piano',
      singer:'Lesfm',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/sad-piano-background-music-for-videos-7573.mp3',
      index: '1'
    },
    {
      name: 'Shooting stars',
      singer:'PianoAmor',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/shooting-stars-142600.mp3',
      index: '2'
    },
    {
      name: 'Canción Triste',
      singer:'enrique27naveda',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/cancion-triste-1502.mp3',
      index: '3'
    },
    {
      name: 'Blessed (Main)',
      singer:'Daddy_s_Music',
      cover: '/songImages/blessed.jpg',
      musicSrc: '/songs/blessed-main-120698.mp3',
      index: '4'
    },
];

  res.json(songsData);
});

app.get("/main/Music_player_Cool", (_, res) => { // 엔드포인트 주소, 서버가 클라이어튼에게 전달할 데이터, Cool 데이터
  const songsData = [
    {
      name: 'Lofi Study',
      singer:'FASSounds',
      cover: '/songImages/Lofi.jpg',
      musicSrc: '/songs/lofi-study-112191.mp3',
      index: '1'
    },
    {
      name: 'Drop It',
      singer:'Coma-Media',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/drop-it-124014.mp3',
      index: '2'
    },
    {
      name: 'Embrace',
      singer:'ItsWatR',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/embrace-12278.mp3',
      index: '3'
    },
    {
      name: 'WatR - Double Overhead',
      singer:'ItsWatR',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/watr-double-overhead-11517.mp3',
      index: '4'
    },

];

  res.json(songsData);
});

app.get("/main/Music_player_Romantic", (_, res) => { // 엔드포인트 주소, 서버가 클라이어튼에게 전달할 데이터, Romantic 데이터
  const songsData = [
    {
      name: 'Leva - Eternity',
      singer:'lemonmusicstudio',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/leva-eternity-149473.mp3',
      index: '1'
    },
    {
      name: 'Piano Moment',
      singer:'Daddy_s_Music',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/piano-moment-9835.mp3',
      index: '2'
    },
    {
      name: 'Futuristic Beat',
      singer:'RoyaltyFreeMusic',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/futuristic-beat-146661.mp3',
      index: '3'
    },
    {
      name: 'Good Night',
      singer:'FASSounds',
      cover: '/songImages/singAlt.jpg',
      musicSrc: '/songs/good-night-160166.mp3',
      index: '4'
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