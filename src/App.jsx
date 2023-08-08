import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainShow from './AppSongMainShow';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginApp />} /> 
        <Route path="/main/*" element={<AppSongMainShow />} />
      </Routes>
    </Router>
  );
};

export default App;