import React from 'react';

const Cell = (props) => {
    return (
        <td onClick={()=>props.handleClick( props.position)}>{props.value}</td>
    )
}

export default Cell;