/*eslint-disable*/
import PaginationSlice from '../redux/PaginationSlice';
const paginationActions=PaginationSlice.actions;
import { useSelector,useDispatch } from 'react-redux';

function Pagination() {
  const {pageNo}=useSelector((state)=> {return state.PaginationSlice});

  const dispatch=useDispatch();
  const nextPageFn=()=>{
    dispatch(paginationActions.handleNext())
  }
  const previousPageFn=()=>{
    dispatch(paginationActions.handlePrev())
  }

  return (
    <div>
        <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2">
                <div onClick={previousPageFn} className="px-8">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div >
                    {pageNo}
                </div>
                <div onClick={nextPageFn} className="px-8">
                    <i class='fa-solid fa-arrow-right'></i>
                </div>
            </div>
    </div>
  )
}

export default Pagination;
