import React, {Component} from 'react';

const Cell = (props) => {
    return (
        <td onClick={()=>props.handleClick(props.i , props.j, props.player)}>{props.value}</td>
    )
}

export default Cell;