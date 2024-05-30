import classes from './Grid.module.css';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Rock from "./cellTypes/Rock";
import Tree from "./cellTypes/Tree";
import Grass from "./cellTypes/Grass";
import {setSelectedCellCoordinates} from "../../store/slices/cellSlice";

function Cell(props) {
    const [selected, setSelected] = useState(false);
    const [random] = useState(Math.random());
    const selectedCellCoordinates = useSelector((state) => state.cell.selectedCellCoordinates);
    const dispatch = useDispatch();
    const size = 60;

    useEffect(() => {
        if (selectedCellCoordinates?.x !== props.colNumber || selectedCellCoordinates?.y !== props.rowNumber) {
            setSelected(false);
        }
    }, [props.colNumber, props.rowNumber, selectedCellCoordinates])

    const cellToRender = () => {
        if (random > 0.9) {
            return <Rock size={size}/>;
        } else if (random > 0.6) {
            return <Tree size={size}/>;
        } else {
            return <Grass size={size}/>;
        }
    }

    const handleClick = () => {
        let coordinates;
        setSelected((prevSelected) => {
            coordinates = !prevSelected ? {x: props.colNumber, y: props.rowNumber} : undefined;
            return !prevSelected;
        });
        dispatch(setSelectedCellCoordinates(coordinates));
    };

    return (
        <div className={selected ? `${classes.item} ${classes.selected}` : `${classes.item}`}
             style={{width: size, height: size}}>
            <div onClick={handleClick}>
                {cellToRender()}
            </div>
        </div>
    );
}

export default Cell;