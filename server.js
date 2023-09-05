const express = require('express');
const app = express();
const port = 3000; // 서버와 클라이언트 분리, 분리된 서버가 클라이언트에서 동작확인을 위해
const path = require('path');
const cors = require('cors'); // cors 패키지를 불러오기
// 출처가 다른 서버에서 이미지나 데이터를 로드하려고 할 때, 이 정책으로 인해 보안 문제가 발생
app.use(cors()); // 모든 라우트에 대해 CORS를 활성화

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // JSON 파싱 미들웨어 추가

app.get("/main/Music_player", (_, res) => { // 엔드포인트 주소, 서버가 클라이어튼에게 전달할 데이터
  const songsData = [
    {
      name: 'Catch It',
      singer:'Music_for_Videos',
      cover: '/songImages/catch_it.jpg',
      musicSrc: '/songs/catch-it-117676.mp3',
    },
    {
      name: 'fun times together',
      singer:'Musictown',
      cover: '/songImages/funtimestogether.jpg',
      musicSrc: '/songs/fun-times-together-112809.mp3',
    },
    {
      name: 'happy cooking show',
      singer:'Music_for_Videos',
      cover: '/songImages/happycookingshow.jpg',
      musicSrc: '/songs/happy-cooking-show-111370.mp3',
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
  console.log(`서버 실행 중입니다. http://localhost:${port}`);
});