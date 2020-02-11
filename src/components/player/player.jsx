import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
import 'react-h5-audio-player/src/styles.scss';
import './player.scss';

const Player = () => (
  <AudioPlayer
    src="https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"
  // other props here
  />
);

export default Player;
