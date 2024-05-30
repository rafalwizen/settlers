import React from 'react';
import Cell from "./Cell";


function GridElementsList(props) {
    const gridElements = [];
    for (let i = 0; i < 10; i++) {
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