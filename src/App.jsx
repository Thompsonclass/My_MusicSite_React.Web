import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainHome from './Component_Main/AppSongMainHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginApp />} /> 
        <Route path="/main" element={<AppSongMainHome />} />
      </Routes>
    </Router>
  );
};

export default App;