import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import AppSongPlayerDelete from './AppSongPlayerDelete'; // 중괄호 제거
import {useGlobalStateContext} from '../../Component_GlobalState/GlobalStateContent';
import MusicSpectrum from '../Component_Music_Spectrum/MusicSpectrumPlay';
import GetAppIcon from '@material-ui/icons/GetApp';
import {PlayArrow, Pause} from '@material-ui/icons';
import {
    SongPlayerContent,
    SongTitle,
    SongImg,
    StyledButton,
    Spectrum,
    Table,
    TableRow,
    TableCell,
    StyledBtn
} from '../../Styled/ReadAppSongPlayList.styled';

const AppSongPlayList = () => {
    const {setTrackIndex, playing, setPlaying, currentTrackIndex, setCurrentTrackIndex} = useGlobalStateContext();
    const [likedSongs, setLikedSongs] = useState([]);
    const audioRef = useRef(null);

    const fetchLikedSongsData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/likedSongs");
            return response.data;
        } catch (error) {
            console.error("오류가 발생했습니다.", error);
        }
    };

    useEffect(() => {
        const fetchLikedSongs = async () => {
            const likedSongsData = await fetchLikedSongsData();
            setLikedSongs(likedSongsData);
        };

        fetchLikedSongs();
    }, []);

    const playSelectedTrack = (index) => {
        if (!audioRef.current) {
            audioRef.current = new Audio(likedSongs[index].musicSrc);
        }

        if (currentTrackIndex === index) {
            if (audioRef.current.paused) {
                audioRef
                    .current
                    .play();
                setPlaying(true);
            } else {
                audioRef
                    .current
                    .pause();
                setPlaying(false);
            }
        } else {
            setCurrentTrackIndex(index);
            audioRef.current.src = likedSongs[index].musicSrc;
            audioRef
                .current
                .play();
            setPlaying(true);
        }

        setTrackIndex(index);
    };

    const downSelectedTrack = (musicSrc) => {
        const link = document.createElement('a');
        link.href = musicSrc;
        document
            .body
            .appendChild(link);
        link.click();
        document
            .body
            .removeChild(link);
    };

    const handleAllDelete = () => {
        setLikedSongs([]);
    };

    const IconStyle = {
        fontSize: '32px'
    };

    return (
        <> < AppSongPlayerDelete onClick = {
            handleAllDelete
        } /> <SongPlayerContent>
            <Table>
                <tbody>
                    {
                        likedSongs.map((song, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <SongTitle>
                                        <p>{song.name}
                                            /</p>
                                        <p>{song.singer}</p>
                                    </SongTitle>
                                </TableCell>
                                <TableCell>
                                    <SongImg src={song.cover} alt={song.name}/>
                                </TableCell>
                                <TableCell>
                                    <StyledBtn>
                                        <StyledButton onClick={() => playSelectedTrack(index)}>
                                            {
                                                playing && currentTrackIndex === index
                                                    ? <Pause/>
                                                    : <PlayArrow/>
                                            }
                                        </StyledButton>
                                        <div>
                                            <GetAppIcon style={IconStyle} onClick={() => downSelectedTrack(song.musicSrc)}/>
                                        </div>
                                    </StyledBtn>
                                </TableCell>
                                <TableCell>
                                    <Spectrum>
                                        <MusicSpectrum song={song}/>
                                    </Spectrum>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </tbody>
            </Table>
            <ReactJkMusicPlayer
                key={likedSongs.length}
                audioLists={likedSongs}
                mode="full"
                showMiniModeCover={false}
                autoPlay={false}/>
        </SongPlayerContent>
    </>
    );
};

export default AppSongPlayList;
