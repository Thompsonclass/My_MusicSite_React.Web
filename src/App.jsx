import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainHome from './Component_Main/AppSongMainHome';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginApp} />
        <Route path="/main" component={AppSongMainHome} />
      </Switch>
    </Router>
  );
};

export default App;