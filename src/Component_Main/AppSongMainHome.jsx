import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import AppSongMainTitle from '../Component_Title/AppSongMainTitle'; // 메인화면 제목
import mainhome from './Component_PlayList_MainSong/mainhome.jpg';
import mainhomeimg from './Component_PlayList_MainSong/mainhomeimg.jpg';

// Styled components
const MusicMainimg = styled.div`
  background-image: url(${mainhomeimg});
  background-size: cover;
`;

const MainHomeWrapper = styled.div`
  width: 100%;
  height: 500vh;
`;

const Musicimg = styled.img`
  width: 100%;
  height: 100%;
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

  useEffect(() => {
    // 스크롤 이벤트 핸들러 함수
    const handleScroll = () => {
      const introSection = document.getElementById('intro');
      if (introSection) {
        const introPosition = introSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowIntro(introPosition < windowHeight * 0.75);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트되거나 업데이트될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // react-spring의 useSpring 훅을 사용하여 intro 섹션의 애니메이션 스타일 정의
  const introProps = useSpring({
    fontFamily: `'Noto Serif KR', serif`, // 글시체 설정
    borderRadius: '30px',
    width: '50%',
    background: 'lightblue',
    fontSize: '30px',
    opacity: showIntro ? 1 : 0,
    transform: showIntro ? 'translateX(0)' : 'translateX(-20%)', // 왼쪽으로 이동
    config: config.slow, // 스크롤 속도를 느리게 설정
    fontWeight: 'bold',
  });


  return (
    <MusicMainimg>
    <MainHomeWrapper>
      <AppSongMainTitle /> {/* 메인화면 제목 컴포넌트 */}
        <MainTitle><h1>Welcome to Our Music Player</h1></MainTitle>
      <animated.div style={introProps} id="intro">
        <p>Enjoy a journey through the world of melodies and rhythms!</p>
        <p>우리의 음악 애플리케이션은 여러분을 환영합니다. 음악의 환상적인 세계로 여행하며,
           소중한 순간을 더욱 특별하게 만들어줄 음악들을 함께 하세요.</p>
        <Musicimg src={mainhome} alt="music" />
      </animated.div>
    </MainHomeWrapper>
    </MusicMainimg>
  );
};

export default AppSongMainHome;
