import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedElementCoordinates: null,
};

const gridElementSlice = createSlice({
    name: 'gridElement',
    initialState,
    reducers: {
        setSelectedElementCoordinates: (state, action) => {
            state.selectedElementCoordinates = action.payload;
        },
    },
});

export const { setSelectedElementCoordinates } = gridElementSlice.actions;
export default gridElementSlice.reducer;