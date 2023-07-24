import React, { useRef, useEffect, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import axios from 'axios'; // axios 추가
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

const AppSongPlayList = () => {
  const audioRef = useRef(null);
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/songs') // 주소
      .then((response) => {
        setAudioData(response.data);
      })
      .catch((error) => { //에러시 알림
        console.error(error);
      });
  }, []);

  console.log(audioData) // 노래 리스트를 제대로 불러왔는지 확인

  return (
    <> 
      <div>
        <div className="songPlayer">
          <div className='songMainTitle'>
            <h3 className="songTitle"> catch-it / Music_for_Videos </h3>
            <img src="/songImages/catch_it.jpg" id="img" alt="catch-it" />
          </div>
          <AudioPlayer //오디오 기능1
            ref={audioRef}
            src="/songs/catch-it-117676.mp3"
            volume={50 / 100}
            autoPlay={false}
            controls={true}
          />
        </div>
        <div className="songPlayer">
          <div className='songMainTitle'>
            <h3 className="songTitle"> fun-times-together / Musictown </h3>
            <img src="/songImages/funtimestogether.jpg" id="img" alt="funtimestogether" />
          </div>
          <AudioPlayer //오디오 기능2
            ref={audioRef}
            src="/songs/fun-times-together-112809.mp3"
            volume={50 / 100}
            autoPlay={false}
            controls={true}
          />
        </div>
        <div className="songPlayer">
          <div className='songMainTitle'>
            <h3 className="songTitle"> Happy Cooking Show / Music_For_Viedeos </h3>
            <img src="/songImages/happycookingshow.jpg" id="img" alt="happycookingshow" />
          </div>
          <AudioPlayer //오디오 기능3
            ref={audioRef}
            src="/songs/happy-cooking-show-111370.mp3"
            volume={50 / 100}
            autoPlay={false}
            controls={true}
          />
        </div>
        <ReactJkMusicPlayer //라이브러리
          audioLists={audioData}
          mode="full"
          showMiniModeCover={false}
          autoPlay={false}
        />
      </div>
    </>
  )
}

export default AppSongPlayList
