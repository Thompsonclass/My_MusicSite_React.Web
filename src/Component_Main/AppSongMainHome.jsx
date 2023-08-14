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
  const [showIntro_1, setShowIntro_1] = useState(false);

  useEffect(() => { 
    // 스크롤 이벤트 핸들러 함수
    const handleScroll = () => {
      handleSectionScroll('intro', setShowIntro);
      handleSectionScroll('intro_1', setShowIntro_1);
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
      setShowState(sectionPosition < windowHeight * 0.75);
    }
  };

  // react-spring의 useSpring 훅을 사용하여 intro 섹션의 애니메이션 스타일 정의
  const introProps = useSpring({
    fontFamily: `'Noto Serif KR', serif`, // 글시체 설정
    borderRadius: '30px',
    width: '50%',
    fontSize: '25px',
    opacity: showIntro ? 1 : 0,
    transform: showIntro ? 'translateX(0)' : 'translateX(-20%)', // 왼쪽으로 이동
    config: config.slow, // 스크롤 속도를 느리게 설정
    fontWeight: 'bold',
  });

  const intro_1Props = useSpring({
    fontFamily: `'Noto Serif KR', serif`, // 글시체 설정
    borderRadius: '30px',
    width: '50%',
    fontSize: '25px',
    opacity: showIntro_1 ? 1 : 0,
    transform: showIntro_1 ? 'translateX(0)' : 'translateX(-20%)', // 왼쪽으로 이동
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
        <animated.div style={intro_1Props} id="intro_1">
        <p>멜로디와 리듬의 세계로 초대합니다:
        우리의 음악 애플리케이션으로 오신 것을 환영합니다.
        멜로디와 리듬이 춤추는 이 곳에서 음악의 매력을 만끽해보세요.
        음악의 마법 같은 세계로 떠나보세요.
        각 음표와 곡이 여러분을 특별한 순간으로 안내해 드릴 것입니다.
        음악의 힘으로 여러분의 순간들을 더욱 특별하게 만들어보세요.</p>
        </animated.div>
      </animated.div>
    </MainHomeWrapper>
    </MusicMainimg>
  );
};

export default AppSongMainHome;
