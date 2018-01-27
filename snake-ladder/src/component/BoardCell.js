import React, { Component } from 'react';


class BoardCell extends Component {
  render() {
  	var boardCellStyle = "board-cell",
  		cellInternal = null;
  	if (this.props.isLadder === true) {
  		boardCellStyle += " ladder";
  		cellInternal = <div>L -&gt; {this.props.valLadder}</div>
  	} else if (this.props.isSnake === true) {
  		boardCellStyle += " snake";
  		cellInternal = <div>S -&gt; {this.props.valSnake}</div>
  	}
  	if (this.props.hasPlayer === true) {
  		boardCellStyle += " player";
  		cellInternal = <div title={this.props.players.join(" ")} className={this.props.players.join(" ")}></div>
  	}
    return (
      <div className={boardCellStyle}>
        <span>{this.props.value}</span>
        {cellInternal}
      </div>
    );
  }
}

export default BoardCell;
