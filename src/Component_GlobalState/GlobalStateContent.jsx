import React, { createContext, useContext } from 'react';

const GlobalStateContext = createContext();

export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {


  return (
    <GlobalStateContext.Provider
      value={{

      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};