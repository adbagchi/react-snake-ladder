import React, { Component } from 'react';
import PlayerScore from './PlayerScore.js';

class PlayerPosition extends Component {
  render() {
    return (
      <div className="player-position">
        <h3> Score Board </h3>
        <PlayerScore 
            playerInfo={this.props.playerInfo} 
            totalPlayer={this.props.totalPlayer}
            successProp="hasFinished"
          />
      </div>
    );
  }
}

export default PlayerPosition;
