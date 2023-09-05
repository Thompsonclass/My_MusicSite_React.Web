import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppSongMainTitle from '../../../Component_Title/AppSongMainTitle'
import { MainWrapper } from '../../../Styled/ReadMainWrapper.styled'
import styled from 'styled-components';

import {
  Button,
  IconButton,
  Slider,
} from '@material-ui/core';
import { PlayArrow, Pause, VolumeUp, VolumeDown } from '@material-ui/icons';



const JazzParentContainer = styled.div` 
  border: 6px solid black;
  margin-left: 2em;
  width: 112em;  display: flex;
  felx-direction: row;
`
const Titleh2 = styled.div`
  border: 6px solid black;
  border-bottom: none;
  width: 10em;
  height: 3em;
  margin-top: 3em;
  margin-left: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const ListsParentsContainer = styled.div`
  margin: 10px;
  margin-right: 10em; 
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  color: white;
  font-weight: bold;
  font-size: 20px;
`

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 20em;
`

const SongImgContainer = styled.img`
  width: 8em;
  height: 8em;
`;

const SongTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-left: 1em;
`;
const DivSinger = styled.div`
  color: white;
  margin-top: 0.5em;
`;

const AddSongButton = styled.button`
  background-color: #667a8f;
  color: #fff;
  padding: 8px 50px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  &:hover {
    background-color: lightblue;
  }
`

function AppSongJazzContent() {
  const [audioAllData, setAudioAllData] = useState([]); // 모든 노래 리스트
  const [selectedSongs, setSelectedSongs] = useState([]); // 선택된 노래 리스트

  const [isPlaying, setIsPlaying] = useState(false); // Added state for isPlaying
  const [songLength, setSongLength] = useState(300); // Added state for songLength
  const [volume, setVolume] = useState(0.5); // Added state for volume


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
    <MainWrapper>
      <AppSongMainTitle />
      <Titleh2>
        <h2>◆ Jazz 노래</h2>
      </Titleh2>
      <JazzParentContainer>
        {audioAllLists.map((data, index) => (
          <ListsParentsContainer key={index}>
            <ListsContainer>
              <SongImgContainer src={data.cover} alt={data.name} />
              <SongTitleContainer>
                <div>{data.name}</div>
                <DivSinger>{data.singer}</DivSinger>
              </SongTitleContainer>
            </ListsContainer>
            <AddSongButtonWithPlay
              index={index}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              songLength={songLength}
              setSongLength={setSongLength}
              volume={volume}
              setVolume={setVolume}
            />
            <AddSongButton onClick={() => AddSongList(index)}>추가</AddSongButton>
          </ListsParentsContainer>
        ))}
      </JazzParentContainer>
    </MainWrapper>
  );
}

export default AppSongJazzContent;
