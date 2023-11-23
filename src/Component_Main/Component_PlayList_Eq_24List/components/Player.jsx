import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import WaveForm from "../WaveForm";  // WaveForm 컴포넌트를 임포트합니다.

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  const [analyzerData, setAnalyzerData] = useState(null);

  const audioAnalyzer = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
    // Check if analyzerData is already set
    if (analyzerData) {
      return;
    }
  
    const analyzer = audioCtx.createAnalyser();
    analyzer.fftSize = 2048;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const source = audioCtx.createMediaElementSource(audioRef.current);
  
    source.disconnect();
    source.connect(analyzer);
    source.connect(audioCtx.destination);
  
    source.onended = () => {
      source.disconnect();
    };
  
    setAnalyzerData({ analyzer, bufferLength, dataArray });
  };

  const handlePlay = () => {
    audioAnalyzer();
  };

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    console.log("Hey from useEffect form player JS");
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
      handlePlay(); // 재생 시 Waveform도 표시되도록 호출
    }
  };

  const getTime = (time) =>
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "00:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          size="2x"
          className="skip-back"
          icon={faAngleLeft}
        />
        {!isPlaying ? (
          <FontAwesomeIcon
            onClick={playSongHandler}
            size="2x"
            className="play"
            icon={faPlay}
          />
        ) : (
          <FontAwesomeIcon
            onClick={playSongHandler}
            size="2x"
            className="pause"
            icon={faPause}
          />
        )}
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          size="2x"
          className="skip-forward"
          icon={faAngleRight}
        />
      </div>
      {analyzerData && <WaveForm analyzerData={analyzerData} />}
    </div>
  );
};

export default Player;
