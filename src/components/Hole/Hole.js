import React from 'react';
import  './Hole.css';

const hole = (props) => {
    var classes = [];
    classes.push("Hole");
    if(props.cellVal === 1){
        classes.push("Black");
    }
    if(props.cellVal === 2){
        classes.push("Red");
    }
    return(
        <div className={classes.join(' ')}>
        </div>
    )
}

export default hole; 