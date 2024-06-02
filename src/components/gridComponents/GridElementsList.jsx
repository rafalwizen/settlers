import React from 'react';
import Cell from "./Cell";


function GridElementsList(props) {
    const gridElements = [];
    for (let i = 0; i < props.gridSize; i++) {
        gridElements.push(
            <Cell
                rowNumber={props.rowNumber}
                colNumber={i}
                key={i}
            />);
    }
    return gridElements;
}

export default GridElementsList;