import React from 'react';
import  './Board.css';
import Row from '../Row/Row';

const board = (props) => {
    var rows = []; 
    for(var i =0; i<6; i++){
        rows.push(<Row key={i} row={i} cells={props.board[i]} cellClick={props.cellClick}/>)
    }
    return (
      <div className="Board">
        {rows}
      </div>
    );
}

export default board;
