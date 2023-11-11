import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import AppSongMainTitle from '../../../Component_Title/AppSongMainTitle'
import {MainWrapper} from '../../../Styled/ReadMainWrapper.styled'
import {
    SongImgContainer,
    SongTitleContainer,
    DivSinger,
    IconDivContainer,
    LikeBtn,
    ParentContainer,
    ListsContainer
} from '../../../Styled/ReadMainSongContent.styled';
import {IconButton, Slider} from '@material-ui/core';
import {PlayArrow, Pause} from '@material-ui/icons';

function AppSongCalmeContent() {
    const audioRef = useRef(null);
    const [audioAllData, setAudioAllData] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.2);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    useEffect(() => {
        axios
            .get("http://localhost:3000/main/Music_player_Calm")
            .then((response) => {
                setAudioAllData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const audioAllLists = audioAllData.map(
        (song, index) => ({name: song.name, singer: song.singer, cover: song.cover, musicSrc: song.musicSrc, index: index})
    );

    // 볼륨을 조절하는 함수
    const handleVolumeChange = (_, newValue) => {
        // 볼륨 상태 업데이트
        setVolume(newValue);

        // 오디오 요소가 존재하면
        if (audioRef.current) {
            // 오디오 요소의 볼륨을 새로운 값으로 설정
            audioRef.current.volume = newValue;
        }
    };

    // 트랙 재생을 처리하는 함수
    const handlePlayTrack = (index) => {
        // 만약 오디오 요소가 없다면
        if (!audioRef.current) {
            // 새로운 오디오 요소를 생성하고 선택한 트랙의 음악 소스로 설정
            audioRef.current = new Audio(audioAllLists[index].musicSrc);
        }

        // 현재 재생 중인 트랙의 인덱스와 선택한 트랙의 인덱스를 비교
        if (currentTrackIndex === index) {
            if (audioRef.current.paused) {
                // 오디오를 재생하고 재생 상태 업데이트
                audioRef
                    .current
                    .play();
                setPlaying(true);
            } else {
                // 오디오를 일시 정지하고 재생 상태 업데이트
                audioRef
                    .current
                    .pause();
                setPlaying(false);
            }
        } else {
            // 다른 트랙을 선택한 경우 현재 재생 중인 트랙의 인덱스를 새로 선택한 트랙의 인덱스로 업데이트
            setCurrentTrackIndex(index);
            audioRef.current.src = audioAllLists[index].musicSrc;
            // 오디오를 재생하고 재생 상태 업데이트
            audioRef
                .current
                .play();
            setPlaying(true);
        }
    };

    const handleLikeClick = (index) => {
        // 클라이언트에서 서버로 보낼 데이터 정의
        const likedSongData = audioAllLists[index];

        // 서버로 POST 요청 보내기
        axios
            .post("http://localhost:3000/likedSongs", likedSongData)
            .then((response) => {
                alert(response.data.message); // 서버에서의 응답 메시지 출력
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <MainWrapper>
            <AppSongMainTitle/>
            <ParentContainer>
                {
                    audioAllLists.map((data, index) => (
                        <ListsContainer key={index}>
                            <SongImgContainer src={data.cover} alt={data.name}/>
                            <SongTitleContainer>
                                <div>{data.name}</div>
                                <DivSinger>{data.singer}</DivSinger>
                            </SongTitleContainer>
                            <IconDivContainer>
                                <IconButton
                                    onClick={() => handlePlayTrack(index)}
                                    style={{
                                        backgroundColor: playing && currentTrackIndex === index
                                            ? 'red'
                                            : 'black',
                                        borderRadius: '50%',
                                        padding: '5px',
                                        color: 'white',
                                        marginTop: '10px',
                                        width: '40px',
                                        height: '40px'
                                    }}>
                                    {
                                        playing && currentTrackIndex === index
                                            ? <Pause/>
                                            : <PlayArrow/>
                                    }
                                    {/* 재생 버튼 */}
                                </IconButton>
                                <LikeBtn onClick={() => handleLikeClick(index)}>
                                    좋아요
                                </LikeBtn>
                                {/* 좋아요 버튼, 노래 위치 정보 */}
                            </IconDivContainer>
                            <Slider
                                value={volume}
                                onChange={handleVolumeChange}
                                min={0}
                                max={1}
                                step={0.01}
                                style={{
                                    width: '80%'
                                }}/>
                        </ListsContainer>
                    ))
                }
            </ParentContainer>
        </MainWrapper>
    );
}

export default AppSongCalmeContent
