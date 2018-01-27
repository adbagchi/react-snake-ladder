import React, { Component } from 'react';

class Entry extends Component {
	constructor() {
		super();
		this.state = {
			playerCount: 1,
			playerName: [""]
		};
	}

	playerCountChanged (event) {
		var playerCount = parseInt(event.target.value),
			playerName = [];
		for(let player = 0; player < playerCount; player++) {
			playerName.push("");
		}
		this.setState({
			playerCount: playerCount,
			playerName: playerName
		});
	}

	playerNameChanged (event) {
		var {playerName} = this.state;
		playerName[event._dispatchInstances.key] = event.target.value;
		this.setState({
			playerName: playerName
		});
	}


	submitEntry (event) {
		this.props.updatePlayerInfo(this.state.playerCount, this.state.playerName)
		event.preventDefault();
	}


  render() {
  	var playerNameUi = [];
  	for(let player = 0; player < this.state.playerCount; player++) {
  		playerNameUi.push(
  			<div key={player} className="player-name">
	  			<label>Enter the name of player {player + 1} : 
	  				<input key={player} defaultValue={this.state.playerName[player]} onChange={this.playerNameChanged.bind(this)} />
	  			</label>
	  		</div>
  		);
  	}
    return (
      <div className="popup">
		<div className="popup-content">
			<h3>Welcome to Snake & Ladder</h3>
				<form  onSubmit={this.submitEntry.bind(this)}>
				<div className="player-selection">
					<label>Select number of players: 
						<select  value={this.state.playerCount} onChange={this.playerCountChanged.bind(this)}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</label>
				</div>
				<div className="players">
					{playerNameUi}
				</div>
				<div className="action">
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
      </div>
    );
  }
}

export default Entry;
