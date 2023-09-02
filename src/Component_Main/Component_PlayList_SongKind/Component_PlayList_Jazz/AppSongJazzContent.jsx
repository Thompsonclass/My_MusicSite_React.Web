import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppSongMainTitle from '../../../Component_Title/AppSongMainTitle'
import { StyledMainHomeWrapper } from '../../../Component_MainHomeWrapper/Read.styled';


function AppSongJazzContent() {
  const [audioAllData, setAudioAllData] = useState([]); // 모든 노래 리스트
  const [selectedSongs, setSelectedSongs] = useState([]); // 선택된 노래 리스트

  useEffect(() => {
    axios.get("http://localhost:3000/main/Music_player")
      .then((response) => { 
        setAudioAllData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(audioAllData);

  const audioAllLists = audioAllData.map((song, index) => ({
    name: song.name,
    singer: song.singer,
    cover: song.cover,
    musicSrc: song.musicSrc,
    index: index,
  }));

  const AddSongList = (index) => {
    const selectedSong = audioAllLists[index];
    setSelectedSongs((prevSelectedSongs) => [...prevSelectedSongs, selectedSong]);
  };

  return (
    <StyledMainHomeWrapper>
      <AppSongMainTitle />
        {audioAllLists.map((data, index) => (
          <div key={index}>
            <p>{data.name}</p><p>{data.singer}</p>
            <button onClick={() => AddSongList(index)}>추가</button>
          </div>
        ))}
      {/* 선택된 노래 목록 렌더링 */}
      <div>
        <h2>선택된 노래 목록</h2>
        {selectedSongs.map((song, index) => (
          <div key={index}>
            <p>{song.name}</p><p>{song.singer}</p>
          </div>
        ))}
      </div>
    </StyledMainHomeWrapper>
  );
}

export default AppSongJazzContent;
