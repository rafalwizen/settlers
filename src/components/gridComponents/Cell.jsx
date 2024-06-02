import classes from './Cell.module.css';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Rock from "./cellTypes/Rock";
import Tree from "./cellTypes/Tree";
import Grass from "./cellTypes/Grass";
import Castle from "./cellTypes/Castle";
import {setSelectedCellCoordinates} from "../../store/slices/cellSlice";

function Cell(props) {
    const [selected, setSelected] = useState(false);
    const [random] = useState(Math.random());
    const selectedCellCoordinates = useSelector((state) => state.cell.selectedCellCoordinates);
    const cellsInBorders = useSelector((state) => state.borders.cellsInBorders);
    const dispatch = useDispatch();
    const size = 60;
    let thisCell;

    useEffect(() => {
        if (selectedCellCoordinates?.x !== props.colNumber || selectedCellCoordinates?.y !== props.rowNumber) {
            setSelected(false);
        }
    }, [props.colNumber, props.rowNumber, selectedCellCoordinates])

    const cellToRender = () => {
        if (props.colNumber === Math.floor(props.gridSize / 2) && props.rowNumber === Math.floor(props.gridSize / 2)) {
            thisCell = <Castle size={size} x={props.colNumber} y={props.rowNumber} sizeOfBorders={1}/>;
        } else if (random > 0.9) {
            thisCell = <Rock size={size}/>;
        } else if (random > 0.6) {
            thisCell = <Tree size={size}/>;
        } else {
            thisCell = <Grass size={size}/>;
        }
        return thisCell;
    }

    const handleClick = () => {
        let coordinates;
        setSelected((prevSelected) => {
            coordinates = !prevSelected ? {x: props.colNumber, y: props.rowNumber} : undefined;
            return !prevSelected;
        });
        dispatch(setSelectedCellCoordinates(coordinates));
    };

    const getBordersClass = () => {
        let borders = "";
        if (cellsInBorders[`${props.colNumber},${props.rowNumber}`]) {
            borders += classes.inBorders
            if (!cellsInBorders[`${props.colNumber},${props.rowNumber - 1}`]) {
                borders += ' ' + classes.top;
            }
            if (!cellsInBorders[`${props.colNumber},${props.rowNumber + 1}`]) {
                borders += ' ' + classes.bottom;
            }
            if (!cellsInBorders[`${props.colNumber - 1},${props.rowNumber}`]) {
                borders += ' ' + classes.left;
            }
            if (!cellsInBorders[`${props.colNumber + 1},${props.rowNumber}`]) {
                borders += ' ' + classes.right;
            }
        }
        return borders;
    }

    return (
        <div className={`${classes.item} ${selected ? classes.selected : ''} ${getBordersClass()}`}
             style={{width: size, height: size}}>
            <div onClick={handleClick}>
                {cellToRender()}
            </div>
        </div>
    );
}

export default Cell;