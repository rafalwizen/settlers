import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCellCoordinates: null,
};

const cellSlice = createSlice({
    name: 'cell',
    initialState,
    reducers: {
        setSelectedCellCoordinates: (state, action) => {
            state.selectedCellCoordinates = action.payload;
        },
    },
});

export const { setSelectedCellCoordinates } = cellSlice.actions;
export default cellSlice.reducer;