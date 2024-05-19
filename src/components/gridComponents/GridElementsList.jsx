import React from 'react';
import GridElement from "./GridElement";


function GridElementsList(props) {
    const selectedElementChangeHandler = (selectedElementCoordinates) => {
        props.onSelectedElementChange(selectedElementCoordinates)
    }

    const gridElements = [];
    for (let i = 0; i < 10; i++) {
        gridElements.push(
            <GridElement
                onSelectedElementChange={selectedElementChangeHandler}
                rowNumber={props.rowNumber}
                colNumber={i}
                key={i}
            />);
    }
    return gridElements;
}

export default GridElementsList;