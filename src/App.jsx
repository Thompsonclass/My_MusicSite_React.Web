import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainHome from './Component_Main/AppSongMainHome';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={<LoginApp />} />
        <Route path="/main" component={<AppSongMainHome />} />
      </div>
    </Router>
  );
};

export default App;