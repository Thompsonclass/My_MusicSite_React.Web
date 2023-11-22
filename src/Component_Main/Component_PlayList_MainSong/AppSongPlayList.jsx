import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import {useGlobalStateContext} from '../../Component_GlobalState/GlobalStateContent';
import MusicSpectrumPlay from '../Component_Music_Spectrum/MusicSpectrumPlay';
import GetAppIcon from '@material-ui/icons/GetApp';

// 스타일 및 컴포넌트 import
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

// 함수형 컴포넌트 정의
const AppSongPlayList = () => {
    // Global state로부터 필요한 값들 가져오기
    const {setTrackIndex, playing, setPlaying, setCurrentTrackIndex} = useGlobalStateContext();
    const [likedSongs, setLikedSongs] = useState([]); // 좋아요 노래 목록 리스트

    // 좋아요한 노래 목록을 가져오는 함수
    const fetchLikedSongsData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/likedSongs");
            return response.data;
        } catch (error) {
            console.error("오류가 발생했습니다.", error);
        }
    };

    // 컴포넌트가 처음 마운트될 때 실행되는 useEffect
    useEffect(() => {
        const fetchLikedSongs = async () => {
            const likedSongsData = await fetchLikedSongsData();
            setLikedSongs(likedSongsData);
        };

        fetchLikedSongs();
    }, []);

    // 선택한 트랙을 재생하는 함수
    const playSelectedTrack = (index) => {
        setPlaying(!playing);
        setTrackIndex(index);
        setCurrentTrackIndex(index);
    };

    // 선택한 트랙을 다운로드하는 함수
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

    // 모든 노래를 제거하는 함수
    const handleAllDelete = async () => {
        setLikedSongs([]);
        alert("전부 제거되었습니다.");
    };

    // 다운로드 아이콘 스타일
    const IconStyle = {
        fontSize: '30px'
    };

    // JSX를 반환
    return (<> {/* 전체 노래 제거 버튼 */
    } < DeleteWallpaper > <ButtonAllDelete onClick={handleAllDelete}>전부 제거</ButtonAllDelete>
</DeleteWallpaper>

        {/* 노래 목록 및 음악 플레이어 */
    } < SongPlayerContent > {
        likedSongs.length > 0
            ? (
                // 좋아요한 노래가 하나 이상일 경우 테이블을 렌더링
                <Table>
                    <tbody>
                        {
                            likedSongs.map((song, index) => (
                                // 각 노래에 대한 행을 생성
                                <TableRow key={index}>
                                    {/* 노래 제목과 가수 */}
                                    <TableCell>
                                        <SongTitle>
                                            <p>{song.name}/</p>
                                            <p>{song.singer}</p>
                                        </SongTitle>
                                    </TableCell>

                                    <TableCell>

                                    </TableCell>

                                    {/* 노래 커버 이미지 */}
                                    <TableCell>
                                        <SongImg src={song.cover} alt={song.name}/>
                                    </TableCell>

                                    {/* 재생 및 다운로드 버튼 */}
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

                                    {/* 음악 스펙트럼 플레이어 */}
                                    <TableCell>
                                        <MusicSpectrumPlay song={song} index={index}/>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </tbody>
                </Table>
            )
            : (
                // 좋아요한 노래가 없을 경우 메시지 출력
                <p>No liked songs available</p>
            )
    } {/* 음악 플레이어 */
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
    } /> </SongPlayerContent> </>
    );
};

// 컴포넌트를 내보냄
export default AppSongPlayList;