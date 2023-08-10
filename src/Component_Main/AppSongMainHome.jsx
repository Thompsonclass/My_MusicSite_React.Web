import React, { useEffect } from 'react';
import AppSongMainShow from './AppSongMainShow';

const AppSongMainHome = () => {

  useEffect(() => {
    document.title = "음악 플레이어";
  }, []);

  return (
    <div>
      <AppSongMainShow />
    </div>
  );
}

export default AppSongMainHome;