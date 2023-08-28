import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {

  const [trackIndex, setTrackIndex] = useState(null); // 선택된 트랙의 인덱스를 관리하는 상태
  const [playing, setPlaying] = useState(true); // 재생 여부를 관리하는 상태

  const [JoinShowValue, setJoinShowValue] = useState(false); // JoinApp component로 이동

  return (
    <GlobalStateContext.Provider
      value={{
        trackIndex,
        setTrackIndex,
        playing,
        setPlaying,
        JoinShowValue,
        setJoinShowValue,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
