import React from "react";
import ReactWaves from "@dschoon/react-waves";
import { useGlobalStateContext } from '../../Component_GlobalState/GlobalStateContent';

function MusicSpectrumPlay({ song }) {
  const { trackIndex, playing } = useGlobalStateContext();

  return (
    <div>
      {trackIndex === song.index && playing && (
        <ReactWaves
          audioFile={song.musicSrc}
          options={{
            backend: 'MediaElement',
            normalize: true,
            cursorWidth: 0,
            mediaType: 'audio',
            hideScrollbar: true,
            responsive: true,
          }}
          zoom={1}
          playing={playing}
        />
      )}
    </div>
  );
}

export default MusicSpectrumPlay;