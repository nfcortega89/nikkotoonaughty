import React, { Component } from 'react';
import List from './list';

export default class Board extends Component {
  render() {
    return (
      <div className="board-container">
        <List />
      </div>
    );
  }
}
