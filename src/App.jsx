import React, { useState } from 'react';
import LoginApp from './Component_Authentication/LoginApp';
import AppSongMainShow from './Component_Main/AppSongMainShow';

const App = () => {
  const [appSongMainShow, setAppSongMainShow] = useState(false);

  return (
    <div>
      {!appSongMainShow ? (
        <div><LoginApp setAppSongMainShow={setAppSongMainShow} /></div>
      ) : (
        <div><AppSongMainShow /></div>
      )}
    </div>
  );
};

export default App;