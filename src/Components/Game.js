import React, { Component } from 'react';
// import './Game.css';
import Board from './Board';

export default class Game extends Component {
  render() {
    return (
      <div className="cell-wrapper">
        < Board />
      </div>
    );
  }
}
