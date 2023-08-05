import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainHome from './Component_Main/AppSongMainHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route path="/Music_player_main" element={<AppSongMainHome />} />
      </Routes>
    </Router>
  );
};

export default App;