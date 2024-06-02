import classes from './Castle.module.css';
import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';

import {addCellToBorders} from "../../../store/slices/bordersSlice";

function Castle(props) {
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const prepareBordersToAdd = () => {
        const cells = [];
        for (let x = -props.sizeOfBorders; x <= props.sizeOfBorders; x++) {
            for (let y = -props.sizeOfBorders; y <= props.sizeOfBorders; y++) {
                cells.push([props.x + x, props.y + y])
            }
        }
        return cells;
    }

    useEffect(() => {
        dispatch(addCellToBorders(prepareBordersToAdd()));
    }, [dispatch, prepareBordersToAdd, props.x, props.y]);

    
    return (
        <div className={classes.castle} style={{width: props.size, height: props.size}}>
            <img src="/images/purple_castle.png" style={{width: props.size}}/>
        </div>
    );
}

export default Castle;