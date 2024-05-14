import React, { useState } from 'react';
import GridElement from "./GridElement";
import RockElement from "./gridElementTypes/RockElement";
import TreeElement from "./gridElementTypes/TreeElement";
import GrassElement from "./gridElementTypes/GrassElement";

function GridElementsList(props) {
    const [isAnyElementSelected, setAnyElementSelected] = useState(false);
    const size = 60;

    const elementToRender = () => {
        const rand = Math.random();
        if (rand > 0.9) {
            return <RockElement size={size}/>;
        } else if (rand > 0.6) {
            return <TreeElement size={size}/>;
        } else {
            return <GrassElement size={size}/>;
        }
    }

    const gridElements = [];
    for (let i = 0; i < 10; i++) {
        gridElements.push(
            <GridElement
                elementToRender={elementToRender()}
                size={size}
                rowNumber={props.rowNumber}
                colNumber={i}
                key={i}
            />);
    }
    return gridElements;
}

export default GridElementsList;