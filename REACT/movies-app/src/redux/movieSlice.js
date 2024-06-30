import { createSlice } from "@reduxjs/toolkit";
const MoviesSlice=createSlice({
    name:'moviesSlice',
    initialState:{
        movies:null,
        error:false,
        loading:true,
    },
    reducers:{
        movieLoading:(state,action)=>{
            state.error=false;
            state.loading=action.payload;
        },
        movieError:(state)=>{
            state.error=true;
            state.loading=false;
        },
        movieData:(state,action)=>{
            state.loading=true;
            state.error=false;
            state.movies=action.payload;
        }

    }
})

export default MoviesSlice;