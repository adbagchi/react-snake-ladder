import React, { Component } from 'react';
import BoardCell from './BoardCell.js'

class Board extends Component {
	constructor(props) {
		super();
		var boardData = [];
		for (let cell = 0; cell < 100; cell++) {
			let cellData = {
				isLadder: false,
				isSnake: false,
				valLadder: undefined,
				valSnake: undefined,
				value: cell + 1
			};
			switch (cell) {
				case 7: cellData.isLadder = true;
						cellData.valLadder = 31;
						break;

				case 14: cellData.isLadder = true;
						cellData.valLadder = 97;
						break;

				case 23: cellData.isSnake = true;
						cellData.valSnake = 1;
						break;

				case 41: cellData.isLadder = true;
						cellData.valLadder = 81;
						break;

				case 54: cellData.isSnake = true;
						cellData.valSnake = 13;
						break;

				case 65: cellData.isLadder = true;
						cellData.valLadder = 87;
						break;

				case 70: cellData.isSnake = true;
						cellData.valSnake = 29;
						break;

				case 87: cellData.isSnake = true;
						cellData.valSnake = 67;
						break;

				case 98: cellData.isSnake = true;
						cellData.valSnake = 6;
						break;
			}
			boardData.push(cellData);
		}
		this.state = {
			boardData: boardData
		};
	}



  render() {
  	var boardRow1 = [], boardRow2 = [], boardRow3 = [], boardRow4 = [], boardRow5 = [], boardRow6 = [], boardRow7 = [], boardRow8 = [], boardRow9 = [], boardRow10 = [],
  		{boardData} = this.state;
  	boardData.forEach((board) => {
  		board.hasPlayer = false;
		board.players = undefined;
  	});
	this.props.playerInfo.forEach((player, playerIndex) => {
		boardData[player.score].hasPlayer = true;
		if(boardData[player.score].players === undefined) {
			boardData[player.score].players = [];
		}
		boardData[player.score].players.push("player-" + (playerIndex + 1));
	});
	for(let cell = 99; cell > 89; cell--) {
	    boardRow1.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
	for(let cell = 80; cell < 90; cell++) {
	    boardRow2.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
	for(let cell = 79; cell > 69; cell--) {
	    boardRow3.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
	for(let cell = 60; cell < 70; cell++) {
	    boardRow4.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
	for(let cell = 59; cell > 49; cell--) {
	    boardRow5.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
	for(let cell = 40; cell < 50; cell++) {
	    boardRow6.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
	for(let cell = 39; cell > 29; cell--) {
	    boardRow7.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
	for(let cell = 20; cell < 30; cell++) {
	    boardRow8.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
	for(let cell = 19; cell > 9; cell--) {
	    boardRow9.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
	for(let cell = 0; cell < 10; cell++) {
	    boardRow10.push(<BoardCell key={cell} isLadder={boardData[cell].isLadder} isSnake={boardData[cell].isSnake} hasPlayer={boardData[cell].hasPlayer} valLadder={boardData[cell].valLadder} valSnake={boardData[cell].valSnake} players={boardData[cell].players}  players={boardData[cell].players}   value={boardData[cell].value} />);
	}
    return (
      <div className="board">	
		<div className="board-row">
			{boardRow1}
		</div>
		<div className="board-row">
		    {boardRow2}
		</div>
		<div className="board-row">
		    {boardRow3}
		</div>
		<div className="board-row">
		    {boardRow4}
		</div>
		<div className="board-row">
		    {boardRow5}
		</div>
		<div className="board-row">
		    {boardRow6}
		</div>
		<div className="board-row">
		    {boardRow7}
		</div>
		<div className="board-row">
		    {boardRow8}
		</div>
		<div className="board-row">
		    {boardRow9}
		</div>
		<div className="board-row">
		    {boardRow10}
		</div>
      </div>
    );
  }
}

export default Board;
