import React, { createRef, Component } from "react";
import ReactWaves from "@dschoon/react-waves";
import track1 from "./tracks/track1.mp3";
import track2 from "./tracks/track2.mp3";

class MusicList extends Component {
  initialTracks = {
    tracks: [
      { source: track1, title: "Zimt" },
      { source: track2, title: "Ingwer" }
    ]
  };
  audioMotion = undefined;

  constructor(props) {
    super(props);
    this.audioRef = createRef();
    this.state = {
      mediaElt: null,
      playing: false,
      tracks: [
        { source: track1, title: "Zimt" },
        { source: track2, title: "Ingwer" }
      ],
      track: this.initialTracks.tracks[0]
    };
  }

  render() {
    return (
      <>
        <div
          style={{ color: "red" }}
          onClick={() => {
            this.setState({ playing: !this.state.playing });
          }}
        >
          Click me to trigger play: {!this.state.playing ? "▶" : "■"}
        </div>

        <ReactWaves
          audioFile={this.state.track.source} // maps the audio to the element
          className={"react-waves"}
          options={{
            backend: "MediaElement", // maps the waveform to an audio element
            normalize: true,
            cursorWidth: 0,
            mediaType: "audio",
            hideScrollbar: true,
            responsive: true
          }}
          zoom={1}
          playing={this.state.playing}
        />
      </>
    );
  }
}
export default MusicList;
