import React, { useState } from 'react';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainHome from './Component_Main/AppSongMainHome';

const App = () => {
  const [appSongMainShow, setAppSongMainShow] = useState(false);

  return (
    <div>
      {!appSongMainShow ? (
        <div><LoginApp setAppSongMainShow={setAppSongMainShow} /></div>
      ) : (
        <div><AppSongMainHome /></div>
      )}
    </div>
  );
};

export default App;