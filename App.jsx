import './App.css';
import React, { useState } from 'react';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainShow from './Component_Main/AppSongMainShow';

function App() {
  const [appSongMainShow, setAppSongMainShow] = useState(false);

  return (
    <div>
      {!appSongMainShow ? (
        <LoginApp setAppSongMainShow={setAppSongMainShow} />
      ) : (
        <AppSongMainShow />
      )}
    </div>
  );
}

export default App;