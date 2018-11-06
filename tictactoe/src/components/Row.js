import React from 'react';
import Cell from './Cell';

const Row = (props) => {
    const {row, rowIndex, handleClick} = props ;
    const noOfRows = 3

    return (
        <tr>
        {
            row.map((cellValue, cellIndex)=> {
            const position = rowIndex * noOfRows + cellIndex;
            return <Cell position={position} value={cellValue} handleClick={handleClick} />
            })
        }
        </tr>
    )
}

export default Row;