import React, { Component } from 'react';

class Player extends Component {
	constructor() {
		super();
		this.state = {
			diceVal: 1
		};
	}

	onDiceRoll() {
		var nextVal = Math.floor(Math.random() * 5) + 1;
		this.setState({
			diceVal: nextVal
		});
		this.props.updateScore(this.props.activePlayer, nextVal);
	}




  render() {
    return (
      <div>
        <div className="player-turn">{this.props.playerInfo.name}'s Turn</div>
			<div className="turn-dice">
				<img src={'./images/' + this.state.diceVal +'.png'} />
			    <button onClick={this.onDiceRoll.bind(this)}>{this.props.diceCaption}</button>
			</div>
      </div>
    );
  }
}

export default Player;
