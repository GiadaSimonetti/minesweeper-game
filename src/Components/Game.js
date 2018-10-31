import React, { Component } from 'react';
import './Game.css';
import Board from './Board';

export default class Game extends Component {
    state = {
    height: 8,
    width: 8,
    mines: 10
  };

  render() {
      const { height, width, mines } = this.state;
      return (
      <div className="game">
        <Board height={height} width={width} mines={mines} />
      </div>
    );
  }
}
