import React, { Component } from 'react';
import Board from './Board.js';
import Player from './Player.js';
import Entry from './Entry.js';
import Result from './Result.js';
import PlayerPosition from './PlayerPosition.js';
import '../css/snake-ladder.css';

class SnakeLadder extends Component {
	constructor() {
		super();
		this.state = {
			totalPlayer: 1,
			activePlayer: 0,
			playerInfo: [{
				name: "",
				score: 0,
				hasFinished: false,
				isWinner: false
			}],
			isFinished: false,
			hasOwn: undefined,
			diceCaption: "Roll it",
			isEntryDisplay: true
		};
	}


	updatePlayerInfo (totalPlayer, playerName) {
		var playerInfo = [];
		for(let player = 0; player < totalPlayer; player++) {
			playerInfo.push({
				name: playerName[player],
				score: 0,
				hasFinished: false,
				isWinner: false
			});
		}
		this.setState({
			totalPlayer: totalPlayer,
			playerInfo: playerInfo,
			isEntryDisplay: false
		});
	}


	updateScore (player, dice) {
		if(dice === 6) {
			this.setState({
				diceCaption: "Roll again"
			});
		} else {
			var {playerInfo, hasOwn} = this.state,
				score = playerInfo[player].score + dice;
			if(score >= 99) {
				score = 99;
				playerInfo[player].hasFinished = true;
				if(hasOwn === undefined) {
					hasOwn = player;
					playerInfo[player].isWinner = true;
				}
			} else {
				switch(score) {
					case 7: score = 30; break;
					case 14: score = 96; break;
					case 23: score = 0; break;
					case 41: score = 80; break;
					case 54: score = 12; break;
					case 65: score = 86; break;
					case 70: score = 28; break;
					case 87: score = 66; break;
					case 98: score = 5; break;
				}
			}
			playerInfo[player].score = score;
			var activePlayer = this.state.activePlayer + 1;
			if(activePlayer === this.state.totalPlayer) {
				activePlayer = 0; 
			}
			var isFinished = playerInfo.filter((player) => player.hasFinished === true).length === playerInfo.length - 1;
			this.setState({
				playerInfo: playerInfo,
				diceCaption: "Roll it",
				activePlayer: activePlayer,
				hasOwn: hasOwn,
				isFinished: isFinished
			});
		}
	}






  render() {
  	var popupUi = null;
  	if(this.state.isEntryDisplay === true) {
  		popupUi = <Entry 
  					updatePlayerInfo={this.updatePlayerInfo.bind(this)}
  				/>
  	} else if(this.state.isFinished === true) {
  		popupUi = <Result 
  					playerInfo={this.state.playerInfo} 
        			totalPlayer={this.state.totalPlayer}
  				/>
  	}

    return (
      <div className="snake-ladder">
        <Board 
        	playerInfo={this.state.playerInfo} 
        	totalPlayer={this.state.totalPlayer}
    	/>
        <div className="player">
        	<Player 
	        	playerInfo={this.state.playerInfo[this.state.activePlayer]} 
	        	activePlayer={this.state.activePlayer} 
	        	updateScore={this.updateScore.bind(this)}
	        	diceCaption={this.state.diceCaption}
	    	/>
	    	<PlayerPosition 
				playerInfo={this.state.playerInfo} 
				totalPlayer={this.state.totalPlayer}
			/>
        </div>
    	{popupUi}
      </div>
    );
  }
}

export default SnakeLadder;
