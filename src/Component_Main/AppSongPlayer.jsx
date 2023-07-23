import React from 'react';
import hedsetImage from './hedset.jpg';

const AppSongPlayer = () => {
  const backgroundStyle = {
    backgroundImage: `url(${hedsetImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    width: "1350px",
    height: "800px",
    position: "fixed",
    margin: "10px",
    border: "solid 2px lightblue"
  };

  const cdStyle = {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // 가운데 정렬
    overflow: "hidden",
    border: "solid 5px red"
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // 이미지 비율 유지
  };

  return (
    <>
      <div style={backgroundStyle}>
        <div style={cdStyle}>
          <img
            src="/songImages/jazzhappy.jpg"
            alt="CD"
            style={imageStyle}
          />
        </div>
      </div>
    </>
  );
};

export default AppSongPlayer;