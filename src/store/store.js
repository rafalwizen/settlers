import { configureStore } from '@reduxjs/toolkit';
import cell from './slices/cellSlice';

const store = configureStore({
    reducer: {
        cell: cell,
    },
});

export default store;