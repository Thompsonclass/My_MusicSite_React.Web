import React, { useEffect } from 'react';
import AppSongMainShow from './AppSongMainShow';

const AppSongMainHome = () => {

  useEffect(() => {
    document.title = "음악 플레이어";
  }, []);

  return (
    <div>
      <AppSongMainShow />
      <h1>안녕하세요.</h1>
    </div>
  );
}

export default AppSongMainHome;