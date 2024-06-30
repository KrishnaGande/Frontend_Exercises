import {createSlice} from '@reduxjs/toolkit';
const PaginationSlice=createSlice({
  name:'PaginationSlice',
  initialState:{
    pageNo:1,
  },
  reducers:{
    handleNext:(state)=>{
      state.pageNo=state.pageNo+1
    },
    handlePrev:(state)=>{
      if(state.pageNo===1){
        return;
      }else{
        state.pageNo=state.pageNo-1;
      }
    }
  }
})

export default PaginationSlice;