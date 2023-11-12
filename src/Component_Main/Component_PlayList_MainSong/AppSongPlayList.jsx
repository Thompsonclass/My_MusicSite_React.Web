import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import AppSongPlayerDelete from './AppSongPlayerDelete';
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

const AppSongPlayList = () => {
    // GlobalStateContext로부터 필요한 상태와 함수를 가져오기
    const {setTrackIndex, playing, setPlaying, setCurrentTrackIndex} = useGlobalStateContext();
    // 서버에서 받아온 좋아요한 노래 목록을 저장할 상태
    const [likedSongs, setLikedSongs] = useState([]);

    // 서버에서 좋아요한 노래 목록을 가져오는 함수
    const fetchLikedSongsData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/likedSongs");
            return response.data;
        } catch (error) {
            console.error("오류가 발생했습니다.", error);
        }
    };

    // 컴포넌트가 마운트될 때 좋아요한 노래 목록을 가져와 상태에 저장
    useEffect(() => {
        const fetchLikedSongs = async () => {
            const likedSongsData = await fetchLikedSongsData();
            setLikedSongs(likedSongsData);
        };

        fetchLikedSongs();
    }, []);

    // 선택된 트랙을 재생하는 함수
    const playSelectedTrack = (index) => {
        setPlaying(!playing); // 재생 상태를 토글
        setTrackIndex(index); // 선택된 트랙의 인덱스 설정
        setCurrentTrackIndex(index); // 현재 트랙의 인덱스 설정
    };

    // 선택된 트랙을 다운로드하는 함수
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

    // 모든 노래 삭제하는 함수
    const handleAllDelete = () => {
        // 좋아요한 노래 목록을 서버에서 삭제하는 요청을 보낸다.
        axios.delete("http://localhost:3000/likedSongsDelete")
        .then(response => {
            console.log(response.data); // 삭제가 성공하면 콘솔에 로그 출력
            setLikedSongs([]); // 좋아요한 노래 목록 초기화
        })
        .catch(error => {
            console.error("삭제 중 오류가 발생했습니다.", error);
        });
    };

    // 아이콘 스타일 설정
    const IconStyle = {
        fontSize: '30px'
    };

    return (
        <> {/* 좋아요한 노래를 모두 삭제하는 버튼 */
        } < AppSongPlayerDelete onClick = {
            handleAllDelete
        } /> {/* 음악 플레이어 영역 */
        } < SongPlayerContent > {/* 노래 목록을 표시할 테이블 */
        } < Table > <tbody>
            {
                likedSongs.map((song, index) => (
                    <TableRow key={index}>
                        {/* 노래 정보 표시 */}
                        <TableCell>
                            <SongTitle>
                                <p>{song.name}/</p>
                                <p>{song.singer}</p>
                            </SongTitle>
                        </TableCell>
                        {/* 노래 썸네일 이미지 */}
                        <TableCell>
                            <SongImg src={song.cover} alt={song.name}/>
                        </TableCell>
                        {/* 노래 재생 및 다운로드 버튼 */}
                        <TableCell>
                            <StyledBtn>
                                {/* 노래 재생 버튼 */}
                                <StyledButton onClick={() => playSelectedTrack(index)}>
                                    Play
                                </StyledButton>
                                {/* 노래 다운로드 버튼 */}
                                <div>
                                    <GetAppIcon style={IconStyle} onClick={() => downSelectedTrack(song.musicSrc)}/>
                                </div>
                            </StyledBtn>
                        </TableCell>
                        {/* 노래 스펙트럼 표시 */}
                        <TableCell>
                            <MusicSpectrumPlay song={song} index={index}/>
                        </TableCell>
                    </TableRow>
                ))
            }
        </tbody>
    </Table>
        {/* 음악 재생기 컴포넌트 */}
        <ReactJkMusicPlayer
          key={likedSongs.length}
          audioLists={likedSongs}
          mode="full"
          showMiniModeCover={false}
          autoPlay={false}
        />
      </SongPlayerContent>
    </>
    );
};

export default AppSongPlayList;
