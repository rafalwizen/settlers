import classes from './GridElement.module.css';
import React, { useState, useRef  } from 'react';

import RockElement from "./gridElementTypes/RockElement";
import TreeElement from "./gridElementTypes/TreeElement";
import GrassElement from "./gridElementTypes/GrassElement";

function GridElement(props) {
    const [selected, setSelected] = useState(false);
    const [random, setRandom] = useState(Math.random());
    const elementRef  = useRef(null);

    const size = 60;

    const elementToRender = () => {
        if (random > 0.9) {
            return <RockElement size={size}/>;
        } else if (random > 0.6) {
            return <TreeElement size={size}/>;
        } else {
            return <GrassElement size={size}/>;
        }
    }

    const handleClick = () => {
        console.log("elementRef")
        console.log(elementRef.current)

        setSelected(!selected);
        props.onSelectedElementChange([props.colNumber, props.rowNumber]);
    };

    return (
        <div className={selected ? `${classes.item} ${classes.selected}` : `${classes.item}`}
             ref={elementRef}
             style={{width: size, height: size}}>
            <div onClick={handleClick}>
                {elementToRender()}
            </div>
        </div>
    );
}

export default GridElement;