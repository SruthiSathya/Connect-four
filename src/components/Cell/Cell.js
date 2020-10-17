import React from 'react';
import  './Cell.css';
import Hole from '../Hole/Hole';

const cell = (props) => {
    return(
        <div className="Cell" onClick={()=>{props.cellClick(props.col)}}>
            <Hole cellVal={props.cellVal}/>
        </div>
    )
}

export default cell; 