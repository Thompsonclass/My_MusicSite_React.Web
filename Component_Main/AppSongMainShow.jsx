import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppSongFavoriteList from './AppSongFavoriteList';

import { AppProps } from "next/App";
import Script from "next/script";

const AppSongMainShow = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  
  useEffect(() => {
    document.title = '홈페이지';
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb: any) => {
          // Run code to get a fresh access token
          cb(token?.replace(/\"/g, "")); // 이 token은 로그인 시에 백엔드에서 받아 온 access token이다.
        },
        volume: 0.5,
      });

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });
      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }
        console.log("state changed", state);
      });

      player.connect();
    };
  }, [token]);

  return (
    <>
      <Router>
        <div className='linkStyleDiv'>
          <div className="linkContainer">
            <Link to="/favorites" className="linkStyle">
              즐겨찾기 목록
            </Link>
          </div>
        </div>
        <div>
            <Routes>
              <Route path="/favorites" element={<AppSongFavoriteList />} />
            </Routes>
        </div>
      </Router>
      <h1>AppSongPlayList</h1>
      <h1>AppSongPlayer</h1>
      <Script src="https://sdk.scdn.co/spotify-player.js" />
      <Component {...pageProps} />
    </>
  );
}

export default AppSongMainShow;
