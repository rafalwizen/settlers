import classes from './GridElement.module.css';
import React, { useState } from 'react';

function GridElement(props) {
    const [selected, setSelected] = useState(false);

    const handleClick = (event) => {
        if (selected) {
            setSelected(false);
        } else {
            setSelected(true);
        }
    };

    return (
        <div className={selected ? `${classes.item} ${classes.selected}` : `${classes.item}`}
             style={{width: props.size, height: props.size}}>
            <div onClick={handleClick}>
                {props.elementToRender}
            </div>
        </div>
    );
}

export default GridElement;