import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  // trackIndex: 선택된 트랙의 인덱스를 관리하는 상태
  // setTrackIndex: trackIndex 상태를 업데이트 하는 함수
  const [trackIndex, setTrackIndex] = useState(null);

  // playing: 재생 여부를 관리하는 상태
  // setPlaying: playing 상태를 업데이트 하는 함수
  const [playing, setPlaying] = useState(false);

  // currentTrackIndex: 현재 트랙의 인덱스를 관리하는 상태
  // setCurrentTrackIndex: currentTrackIndex 상태를 업데이트 하는 함수
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  return (
    <GlobalStateContext.Provider
      value={{
        trackIndex,
        setTrackIndex,
        playing,
        setPlaying,
        currentTrackIndex,
        setCurrentTrackIndex,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
