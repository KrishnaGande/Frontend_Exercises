import { useEffect,useContext } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
// import axios from "axios";
import {WatchListContext} from '../context/WatchListContext';
import fetchMiddleWare from "../redux/fetchMovieMiddleWare";
import { useSelector,useDispatch } from "react-redux";
import PaginationSlice from '../redux/PaginationSlice';
const PaginationActions=PaginationSlice.actions;


/*eslint-disable*/
function Movies(){
    // const [pageNo,setPageNo]=useState(1);
    // const [movies,setMovies]=useState([]);
    const {error,loading,movies}=useSelector((State)=>{return State.MoviesSlice});
    const {pageNo}=useSelector((State)=> {return State.PaginationSlice});
    const dispatch=useDispatch();
    
    const {watchlist,addToWatchlist,removeFromWatchlist}=useContext(WatchListContext);
    
    useEffect(function(){
        dispatch(fetchMiddleWare(pageNo));
    },[pageNo])
    // useEffect(()=>{
    // axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=a981769ddba1ce973560b980afd007f8&language=en-US&page=${pageNo}`)
    // .then(function(res){
    //     console.log(res.data.results);
    //     setMovies(res.data.results);
    // })
    // },[pageNo]);

    const handleNext=()=>{
        // setPageNo(pageNo+1)
        dispatch(PaginationActions.handleNext());
    }

    const handlePrev=()=>{
        // if(pageNo===1){
        //     setPageNo(pageNo);
        // }else{
        //     setPageNo(pageNo-1);
        // }
        dispatch(PaginationActions.handlePrev());
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Something went wrong</h1>
    }

    return (
        <>
            <div className='text-2xl font-bold text-center m-5'>
                <div>Trending Movies</div>
            </div>
            <div className="flex flex-wrap justify-evenly gap-8">
                {movies.map((movieObj,idx)=>{
                    return (
                        <>
                            <MovieCard movieObj={movieObj} index={idx} addToWatchlist={addToWatchlist} watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
                        </>
                    );
                })}
            </div>
            <Pagination nextPageFn={handleNext} previousPageFn={handlePrev} pageNumber={pageNo}/>
        </>
    )
}

export default Movies;