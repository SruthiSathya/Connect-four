import React from 'react';
import './Row.css';
import Cell from '../Cell/Cell';

const Row = (props) => {
    var cells = []; 
    for(var i =0; i < 7; i++){
        cells.push(<Cell key={i} cellVal={props.cells[i]} row={props.row} col={i} cellClick={props.cellClick}/>);
    }
    return(
        <div className="Row">
            {cells}
        </div>
    )
}

export default Row; 