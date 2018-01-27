import React, { Component } from 'react';
import PlayerScore from './PlayerScore.js';

class Result extends Component {
  render() {
  	
    return (
		<div className="popup">
			<div className="popup-content result">
				<h3> Game Over !! </h3>
				<div>
					<label>The result is</label>
					<PlayerScore 
						playerInfo={this.props.playerInfo} 
        				totalPlayer={this.props.totalPlayer}
        				successProp="isWinner"
					/>
				</div>
			</div>
		</div>
    );
  }
}

export default Result;
