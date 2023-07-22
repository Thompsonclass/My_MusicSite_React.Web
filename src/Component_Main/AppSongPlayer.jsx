import React from 'react';

const AppSongPlayer = (props) => {
  const songPlayerStyle = {
    backgroundColor: "rgb(226, 235, 243)",
    width: "1380px",
    height: "800px",
    border: "solid 2px lightblue",
    position: "fixed",
  };

  const cdStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "lightgray",
    position: "absolute",
    top: "50%",
    left: "50%",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // 이미지 비율 
  };

  return (
    <>
      <div className='AppSongPlayer' style={songPlayerStyle}>
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