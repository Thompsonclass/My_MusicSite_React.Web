import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import AppSongMainTitle from '../Component_Title/AppSongMainTitle'; // 메인화면 제목
import mainhome from '../songHomeImg/mainhome.jpg'
import mainhomeimg1 from '../songHomeImg/mainhomeimg1.jpg'
import mainhomeimg2 from '../songHomeImg/mainhomeimg2.jpg'
import mainhomeimg3 from '../songHomeImg/mainhomeimg3.jpg'

// Styled components
const MusicMainimg = styled.div`
  background-image: url(${mainhome});
  background-size: cover;
`;

const MainHomeWrapper = styled.div`
  width: 100%;
  height: 450vh;
`;

const Musicimg = styled.img`
  width: 45%;
  height: 70%;
  border-radius: 3px;
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: 'Noto Serif KR', serif;
`;

const AppSongMainHome = () => {
  // intro 섹션의 가시성 상태를 관리하는 상태 변수
  const [showIntro, setShowIntro] = useState(false);
  const [showIntro_1, setShowIntro_1] = useState(false);
  const [showIntro_2, setShowIntro_2] = useState(false);

  useEffect(() => { 
    // 스크롤 이벤트 핸들러 함수
    const handleScroll = () => {
      handleSectionScroll('intro', setShowIntro);
      handleSectionScroll('intro_1', setShowIntro_1);
      handleSectionScroll('intro_2', setShowIntro_2);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트되거나 업데이트될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const handleSectionScroll = (sectionId, setShowState) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setShowState(sectionPosition < windowHeight * 0.70);
    }
  };

  // react-spring의 useSpring 훅을 사용하여 intro 섹션의 애니메이션 스타일 정의
  const introProps = useSpring({
    borderRadius: '30px',
    width: '100%',
    fontSize: '35px',
    opacity: showIntro ? 1 : 0,
    transform: showIntro ? 'translateX(0)' : 'translateX(-20%)', // 왼쪽으로 이동
    config: config.slow, // 스크롤 속도를 느리게 설정
    fontWeight: 'bold',
  });

  const intro_1Props = useSpring({
    borderRadius: '30px',
    width: '100%',
    fontSize: '35px',
    opacity: showIntro_1 ? 1 : 0,
    transform: showIntro_1 ? 'translateX(40%)' : 'translateX(0%)', // 오른쪽에서 나와서 왼쪽으로 이동
    config: config.slow,
    fontWeight: 'bold',
  });

  const intro_2Props = useSpring({
    borderRadius: '30px',
    width: '100%',
    fontSize: '35px',
    opacity: showIntro_2 ? 1 : 0,
    transform: showIntro_2 ? 'translateX(0%)' : 'translateX(-20%)', // 오른쪽에서 나와서 왼쪽으로 이동
    config: config.slow,
    fontWeight: 'bold',
  });

  return (
    <MusicMainimg>
    <MainHomeWrapper>
      <AppSongMainTitle /> {/* 메인화면 제목 컴포넌트 */}
        <MainTitle><h1>Welcome to Our Music Player</h1></MainTitle>
      <animated.div style={introProps} id="intro">
        <h3 style={{color:'brown'}}>Enjoy a journey through the world of melodies and rhythms!</h3>
        <p>우리의 음악 애플리케이션은 여러분을 환영합니다.</p>
        <p>음악의 환상적인 세계로 여행하며,</p>
        <p>소중한 순간을 더욱 특별하게 만들어줄 음악들을 함께 하세요.</p>
        <Musicimg src={mainhomeimg1} alt="music" />
      </animated.div>
      <animated.div style={intro_1Props} id="intro_1">
        <h3 style={{color:'brown'}}>Feel the Symphony of Sound</h3>
        <li>멜로디와 리듬의 세계로 초대합니다.</li>
        <li>우리의 음악 애플리케이션으로 오신 것을 환영합니다.</li>
        <li>멜로디와 리듬이 춤추는 이 곳에서 음악의 매력을 만끽해보세요.</li>
        <li>음악의 마법 같은 세계로 떠나보세요.</li>
        <li>각 음표와 곡이 여러분을 특별한 순간으로 안내해 드릴 것입니다.</li>
        <li>음악의 힘으로 여러분의 순간들을 더욱 특별하게 만들어보세요.</li>
        <Musicimg src={mainhomeimg2} alt="music" />
      </animated.div>
      <animated.div style={intro_2Props} id="intro_2">
        <h3 style={{color:'brown'}}>Experience the Utopia of Melody</h3>
        <p>감정의 캔버스 위에 각 음표가 붓질을 하는 소리의 세계로 들어오세요.</p>
        <p>저희 음악 애플리케이션은 여러분에게 멜로디와 조화의 심포니를 탐험하게 해드립니다.</p>
        <p>음악의 마법을 발견하고 그 품안에서 여러분의 소중한 순간들을 높여보세요.</p>
        <p>멜로디의 유토피아를 느껴보세요.</p>
        <p>감정의 풍경을 그리는 멜로디와 비트가 얽히는 유토피아의 세계를 발견하세요.</p>
        <p>우리 음악 앱은 여러분을 따뜻하게 환영합니다.</p>
        <p>환상적인 소리의 풍경을 탐험하실 것을 초대합니다.</p>
        <p>멜로디의 환희를 경험하며 하모니의 박자로 소중한 순간을 만들어보세요.</p>
        <Musicimg src={mainhomeimg3} alt="music" />
      </animated.div>
      <hr />
      <div style={{ textAlign: 'center', margin: '2rem 0', color: 'white' }}>
        <h2>우리와 함께 음악의 여정을 시작해보세요</h2>
        <p>앱을 다운로드하고 멜로디와 리듬의 세계에 빠져보세요.</p>
        <a href="/main/Music_player" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', fontSize: '18px', fontWeight: 'bold', borderRadius: '5px',
            background: 'brown', color: 'white', border: 'none', cursor: 'pointer' }}>
            시작하기
          </button>
        </a>
      </div>
    </MainHomeWrapper>
    </MusicMainimg>
  );
};

export default AppSongMainHome;
