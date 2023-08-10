import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GlobalStateContext.Provider
      value={{ // 공유 요소
        currentSongIndex, // 현재 값
        setCurrentSongIndex, // 상태 값
        isLoading, // 현재 값
        setIsLoading // 상태 값
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};