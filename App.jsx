import './App.css';
import React from 'react'
import LoginApp from './Component_Authentication/LoginApp';
import AppSongPlayList from './Component_Main/AppSongPlayList';

function App() {
  return (
    <div>
      <LoginApp />
      <AppSongPlayList />
    </div>
  );
}

export default App;
