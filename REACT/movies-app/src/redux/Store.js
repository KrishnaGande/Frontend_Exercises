import {configureStore} from '@reduxjs/toolkit';
import PaginationSlice from './PaginationSlice';
import counterReducer from './counterSlice';
import MoviesSlice from './movieSlice';

const Store=configureStore({
    reducer:{
        counter:counterReducer,
        PaginationSlice:PaginationSlice.reducer,
        MoviesSlice:MoviesSlice.reducer,
    },
});

export default Store;