import React from 'react';
import binly from './binly.jpg';
import bgm from './bgm.jpg';

const AppSongPlayer = ({ imageSrc }) => {
  const backgroundStyle = {
    backgroundSize: 'cover', 
    width: "1350px",
    height: "800px",
    position: "fixed",
    margin: "10px",
    border: "solid 2px lightblue"
  };

  const cdStyle = {
    position: "absolute", // 절대적인 위치 설정
    top: "50%", 
    left: "35%", 
    transform: "translate(-50%, -50%)", // CD 이미지를  중앙에 위치
    width: "300px", // 300px로 설정
    height: "300px", // 300px로 설정
    borderRadius: "50%", // CD 이미지를 원형
    overflow: "hidden", // 내부 내용이 넘치지 않도록 설정합니다.
  };

  const bgmStyle = {
    position: "absolute", // 절대적인 위치 설정
    top: "50%",
    left: "20%",
    transform: "translate(-50%, -50%)", // BGM 이미지를  중앙에 위치
    width: "300px", // 300px로 설정
    height: "300px", // 300px로 설정
    borderRadius: "50%", // BGM 이미지를 원형
  };

  const imageStyle = {
    width: "100%", // 이미지를 컨테이너 크기에 맞게 조정하기 위해 너비를 100%로 설정합니다.
    height: "100%", // 이미지를 컨테이너 크기에 맞게 조정하기 위해 높이를 100%로 설정합니다.
    objectFit: "cover", // 이미지 비율을 유지하면서 컨테이너에 꽉 차도록 설정합니다.
  };

  return (
    <>
      <div style={backgroundStyle}>
        <div>
          <div style={cdStyle}>
            <img src={binly} alt="CD" style={imageStyle} />
          </div>
          <div style={bgmStyle}>
            <img src={bgm} alt="BGM" style={imageStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSongPlayer;