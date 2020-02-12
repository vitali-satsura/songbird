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

export default class App extends React.Component {
  constructor() {
    super();
    this.round = 0;
    this.isChoose = false;
    this.rightAnswerId = myRandom(1, 6);
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
    birdState: [
      { id: 1, rightAnswer: false, error: false },
      { id: 2, rightAnswer: false, error: false },
      { id: 3, rightAnswer: false, error: false },
      { id: 4, rightAnswer: false, error: false },
      { id: 5, rightAnswer: false, error: false },
      { id: 6, rightAnswer: false, error: false }
    ]
  }

  refreshBird = (id) => {
    console.log(id)
    this.isChoose = true;

    this.setState(({ currentBird, birdState }) => {
      const newBird = birdsData[this.round].filter((el) => el.id === id)[0];
      const index = birdState.findIndex((el) => el.id === id);

      const oldItem = birdState[index];
      let newItem = {};

      if (id === this.rightAnswerId) {
        newItem = {
          ...oldItem,
          rightAnswer: true
        }
      } else {
        newItem = {
          ...oldItem,
          error: true
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
        birdState: newArray
      };
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <AppHeader />
        <IndicationList types={this.state.types} />
        <Question image={image} />
        <section className="birds">
          <BirdsList
            birds={birdsData[this.round]}
            onRefresh={this.refreshBird}
            birdState={this.state.birdState}
          />
          <div className="bird-container">
            {this.isChoose
              ? <Bird bird={this.state.currentBird} />
              : <StartMessage />}
          </div>
        </section>
        <NextLevel />
      </div>
    );
  }
}
