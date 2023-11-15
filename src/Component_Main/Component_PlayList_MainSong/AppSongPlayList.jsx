import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import {useGlobalStateContext} from '../../Component_GlobalState/GlobalStateContent';
import MusicSpectrumPlay from '../Component_Music_Spectrum/MusicSpectrumPlay';
import GetAppIcon from '@material-ui/icons/GetApp';
import {
    SongPlayerContent,
    SongTitle,
    SongImg,
    StyledButton,
    Table,
    TableRow,
    TableCell,
    StyledBtn
} from '../../Styled/ReadAppSongPlayList.styled';
import {DeleteWallpaper, ButtonAllDelete} from '../../Styled/ReadAppSongPlayerDelete.styled';

const AppSongPlayList = () => {
    const {setTrackIndex, playing, setPlaying, setCurrentTrackIndex} = useGlobalStateContext();
    const [likedSongs, setLikedSongs] = useState([]);

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
        setPlaying(!playing);
        setTrackIndex(index);
        setCurrentTrackIndex(index);
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

    const handleAllDelete = async () => {
        setLikedSongs([]);
        alert("전부 제거되었습니다.");
    };

    const IconStyle = {
        fontSize: '30px'
    };

    return (
        <> 
            < DeleteWallpaper > 
                <ButtonAllDelete onClick={handleAllDelete}>전부 제거</ButtonAllDelete>
            </DeleteWallpaper> 
            < SongPlayerContent > {
                likedSongs.length > 0
                    ? (
                        <Table>
                            <tbody>
                            {
                                likedSongs.map((song, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <SongTitle>
                                                <p>{song.name}/</p>
                                                <p>{song.singer}</p>
                                            </SongTitle>
                                        </TableCell>
                                        <TableCell>
                                            <SongImg src={song.cover} alt={song.name}/>
                                        </TableCell>
                                        <TableCell>
                                            <StyledBtn>
                                                <StyledButton onClick={() => playSelectedTrack(index)}>
                                                    Play
                                                </StyledButton>
                                                <div>
                                                    <GetAppIcon style={IconStyle} onClick={() => downSelectedTrack(song.musicSrc)}/>
                                                </div>
                                            </StyledBtn>
                                        </TableCell>
                                        <TableCell>
                                            <MusicSpectrumPlay song={song} index={index}/>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </tbody>
                    </Table>
                )
                : (<p>No liked songs available</p>)
        } < ReactJkMusicPlayer key = {
            likedSongs.length
        }
        audioLists = {
            likedSongs
        }
        mode = "full" showMiniModeCover = {
            false
        }
        autoPlay = {
            false
        } /> </SongPlayerContent>
</>
    );
};

export default AppSongPlayList;
