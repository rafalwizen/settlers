import { configureStore } from '@reduxjs/toolkit';
import cell from './slices/cellSlice';
import borders from './slices/bordersSlice';

const store = configureStore({
    reducer: {
        cell: cell,
        borders: borders,
    },
});

export default store;