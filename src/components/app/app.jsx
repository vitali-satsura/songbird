import React from 'react';

import AppHeader from '../app-header';
import IndicationList from '../indication-list';
import './app.scss';
import Question from '../question';
import NextLevel from '../next-level';
import BirdsList from '../birds-list';
import birdsData from '../../data/data';
import Bird from '../bird';
import StartMessage from '../start-message';
import image from './bird.jpg';
import myRandom from '../../helpers/utils';
import EndGame from '../end-game';
import rightAnswerSound from './right-answer.mp3';
import wrongAnswerSound from './wrong-answer.mp3'

export default class App extends React.Component {
  constructor() {
    super();
    this.level = 0;
    this.isChoose = false;
    this.rightAnswerId = myRandom(1, 6);
    this.isGotRightAnswer = false;
    this.isStartNextRound = false;
    this.isEndGame = false;
    this.score = 0;
    this.count = 0;
    this.isScoreAvailable = true;
  }

  state = {
    types: [
      { id: 1, type: 'Разминка', active: true },
      { id: 2, type: 'Воробьиные', active: false },
      { id: 3, type: 'Лесные птицы', active: false },
      { id: 4, type: 'Певчие птицы', active: false },
      { id: 5, type: 'Хищные птицы', active: false },
      { id: 6, type: 'Морские птицы', active: false },
    ],
    currentBird: {},
    currentImage: image,
    currentName: '******',
    birdState: [
      { id: 1, rightAnswer: false, error: false },
      { id: 2, rightAnswer: false, error: false },
      { id: 3, rightAnswer: false, error: false },
      { id: 4, rightAnswer: false, error: false },
      { id: 5, rightAnswer: false, error: false },
      { id: 6, rightAnswer: false, error: false }
    ]
  }

  addScore = (count) => {
    if (this.isScoreAvailable) {
      this.score += 6 - count;
      this.isScoreAvailable = false;
      this.playSound(rightAnswerSound);
    }
  }

  chooseBird = (id) => {
    this.isChoose = true;
    this.count += 1;
    // this.playSound();

    this.setState(({ currentBird, currentImage, currentName, birdState }) => {
      const newBird = birdsData[this.level].filter((el) => el.id === id)[0];
      const index = birdState.findIndex((el) => el.id === id);

      const oldItem = birdState[index];
      let newItem = {};
      let newImage = currentImage;
      let newName = currentName;

      if (id === this.rightAnswerId) {
        newImage = newBird.image;
        newName = newBird.name;
        this.isGotRightAnswer = true;
        this.isStartNextRound = true;
        this.addScore(this.count);
        newItem = {
          ...oldItem,
          rightAnswer: true
        }
      } else if (!this.isGotRightAnswer) {
        this.playSound(wrongAnswerSound);
        newItem = {
          ...oldItem,
          error: true
        }
      } else {
        newItem = {
          ...oldItem
        }
      }

      const newArray = [
        ...birdState.slice(0, index),
        newItem,
        ...birdState.slice(index + 1)
      ]

      return {
        ...this.state,
        currentBird: newBird,
        currentImage: newImage,
        currentName: newName,
        birdState: newArray
      };
    });
  }

  getAudio = () => {
    return birdsData[this.level].filter((el) => el.id === this.rightAnswerId)[0].audio;
  }

  playSound = (sound) => {
    let audio = new Audio();
    audio.src = sound;
    audio.play();
  }

  reset = () => {
    this.isChoose = false;
    this.rightAnswerId = myRandom(1, 6);
    this.isGotRightAnswer = false;
    this.isStartNextRound = false;
    this.count = 0;
    this.isScoreAvailable = true;

    this.setState((state) => {
      const oldItem = state.types;
      oldItem.forEach((el) => {
        if (el['active']) {
          el['active'] = false;
        }
        if (el['id'] === this.level + 1) {
          el['active'] = true;
        }

      });

      return {
        types: oldItem,
        currentBird: {},
        currentImage: image,
        currentName: '******',
        birdState: [
          { id: 1, rightAnswer: false, error: false },
          { id: 2, rightAnswer: false, error: false },
          { id: 3, rightAnswer: false, error: false },
          { id: 4, rightAnswer: false, error: false },
          { id: 5, rightAnswer: false, error: false },
          { id: 6, rightAnswer: false, error: false }
        ]
      };
    })
  }

  startNextLevel = () => {
    if (!this.isStartNextRound) return;
    if (this.level < 5) {
      this.level += 1;
    } else {
      this.isEndGame = true;
      this.level = 0;
    }

    this.reset();

  }

  startGame = () => {
    this.reset();
    this.isEndGame = false;
    this.level = 0;
    this.score = 0;
  }

  render() {
    let classNames = 'main';
    if (this.isEndGame) {
      classNames += ' hidden';
    }
    return (
      <div className="app">
        <AppHeader score={this.score} types={this.state.types} />
        <main className={classNames}>
          <Question image={this.state.currentImage}
            audio={this.getAudio()}
            name={this.state.currentName} />
          <section className="birds">
            <BirdsList
              birds={birdsData[this.level]}
              onRefresh={this.chooseBird}
              birdState={this.state.birdState}
            />
            <div className="bird-container">
              {this.isChoose
                ? <Bird bird={this.state.currentBird} />
                : <StartMessage />}
            </div>
          </section>
          <NextLevel
            isActive={this.isStartNextRound}
            onStartNextLevel={this.startNextLevel}
          />
        </main>
        <EndGame
          score={this.score}
          isVisible={this.isEndGame}
          onStartGame={this.startGame}
        />
      </div>
    );
  }
}
