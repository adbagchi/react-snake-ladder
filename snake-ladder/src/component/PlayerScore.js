import React, { Component } from 'react';

class PlayerScore extends Component {
  render() {
  	var resultUi = [];
  	for(let player = 0; player < this.props.totalPlayer; player++) {
  		resultUi.push(<li key={player} className={this.props.playerInfo[player][this.props.successProp] === true ? "winner" : this.props.playerInfo[player].hasFinished === false ? "incomplete" : ""}>
  						<span className="name">{this.props.playerInfo[player].name}</span>
  						<span className="score">{this.props.playerInfo[player].score + 1}</span>
              <div className="clr"></div>
					</li>);
  	}
  	
    return (
      <div className="player-score">
        <ul>
          {resultUi}
        </ul>
      </div>
    );
  }
}

export default PlayerScore;
