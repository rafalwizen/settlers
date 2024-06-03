import React from 'react';
import Cell from "./Cell";

function GridElementsList(props) {
    const gridElements = [];
    for (let i = -1* Math.floor(props.gridSize/2); i <= Math.floor(props.gridSize/2); i++) {
        gridElements.push(
            <Cell
                gridSize={props.gridSize}
                rowNumber={props.rowNumber}
                colNumber={i}
                key={i}
            />);
    }
    return gridElements;
}

export default GridElementsList;