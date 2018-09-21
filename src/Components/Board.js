import React, { Component } from 'react';
// import './Board.css';
import Cell from './Cell'

export default class Board extends Component {
  render() {
    return (
      <div className="board-wrapper">
        < Cell />
      </div>
    );
  }
}
