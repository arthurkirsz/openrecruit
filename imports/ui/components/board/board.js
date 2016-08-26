import React from 'react';
import { BoardHeader } from './header.js';
import { BoardCanvas } from './canvas.js';

export const Board = ({ job }) => (
  <div className="board-wrapper">
  	<BoardHeader job={ job } />
  	<BoardCanvas job={ job } />
  </div>
);

Board.propTypes = {
  job: React.PropTypes.object,
};
