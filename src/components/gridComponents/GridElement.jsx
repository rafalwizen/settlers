import classes from './GridElement.module.css';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RockElement from "./gridElementTypes/RockElement";
import TreeElement from "./gridElementTypes/TreeElement";
import GrassElement from "./gridElementTypes/GrassElement";
import {setSelectedElementCoordinates} from "../../store/slices/gridElementSlice";

function GridElement(props) {
    const [selected, setSelected] = useState(false);
    const [random] = useState(Math.random());
    const selectedElementCoordinates = useSelector((state) => state.gridElement.selectedElementCoordinates);
    const dispatch = useDispatch();
    const size = 60;

    useEffect(() => {
        if (selectedElementCoordinates?.x !== props.colNumber || selectedElementCoordinates?.y !== props.rowNumber) {
            setSelected(false);
        }
    }, [props.colNumber, props.rowNumber, selectedElementCoordinates])

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
        let coordinates;
        setSelected((prevSelected) => {
            coordinates = !prevSelected ? {x: props.colNumber, y: props.rowNumber} : undefined;
            return !prevSelected;
        });
        dispatch(setSelectedElementCoordinates(coordinates));
    };

    return (
        <div className={selected ? `${classes.item} ${classes.selected}` : `${classes.item}`}
             style={{width: size, height: size}}>
            <div onClick={handleClick}>
                {elementToRender()}
            </div>
        </div>
    );
}

export default GridElement;