import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cellsInBorders: {}
};

const bordersSlice = createSlice({
    name: 'borders',
    initialState,
    reducers: {
        addCellToBorders: (state, action) => {
            action.payload.forEach(coordinates => {
                const [ x, y ] = coordinates;
                state.cellsInBorders[`${x},${y}`] = `${x},${y}`;
            })
        },
    },
});

export const { addCellToBorders } = bordersSlice.actions;
export default bordersSlice.reducer;