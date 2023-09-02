import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppSongMainTitle from '../../../Component_Title/AppSongMainTitle'
import { StyledMainHomeWrapper } from '../../../Component_MainHomeWrapper/Read.styled';
import styled from 'styled-components';

const JazzParentContainer = styled.div`
  border: 2px solid black;
  margin-left: 2em;
  width: 112em;
  display: flex;
  felx-direction: row;
`
const Titleh2 = styled.div`
  border: 2px solid black;
  border-bottom: none;
  width: 10em;
  height: 3em;
  margin-top: 3em;
  margin-left: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  width: 10em;
  margin: 10px;
  font-weight: bold;
  font-size: 20px;
`

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
        <Titleh2>
          <h2>◆ Jazz 노래</h2>
        </Titleh2>
      <JazzParentContainer>
        {audioAllLists.map((data, index) => (
          <div key={index}>
            <ListsContainer>
              <p>{data.name}</p><p>{data.singer}</p> {/* 노래 제목, 가수 */}
              <button onClick={() => AddSongList(index)}>추가</button>
            </ListsContainer>
          </div>
        ))}
      </JazzParentContainer>
    </StyledMainHomeWrapper>
  );
}

export default AppSongJazzContent;
