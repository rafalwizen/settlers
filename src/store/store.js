import { configureStore } from '@reduxjs/toolkit';
import gridElement from './slices/gridElementSlice';

const store = configureStore({
    reducer: {
        gridElement: gridElement,
    },
});

export default store;