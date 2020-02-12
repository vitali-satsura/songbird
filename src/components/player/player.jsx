import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
import 'react-h5-audio-player/src/styles.scss';
import './player.scss';

const Player = ({ audio }) => (
  <AudioPlayer
    src={audio}
    // other props here
    autoPlayAfterSrcChange={false}
  />
);

export default Player;
