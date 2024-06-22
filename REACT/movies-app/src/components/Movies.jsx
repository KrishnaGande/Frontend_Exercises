import { useState } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
/*eslint-disable*/
function Movies(){
    const [pageNo,setPageNo]=useState(1);

    const handleNext=()=>{
        setPageNo(pageNo+1)
    }

    const handlePrev=()=>{
        if(pageNo===1){
            setPageNo(pageNo);
        }else{
            setPageNo(pageNo-1);
        }
    }
    const [movies,setMovies]=useState([
        {
            url:'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)',
            title:'Movie 1'
        },
        {
            url:'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)',
            title:'Movie 2'
        },
        {
            url:'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)',
            title:'Movie 3'
        },
        {
            url:'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)',
            title:'Movie 4'
        },
        {
            url:'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)',
            title:'Movie 5'
        }
    ]);

    return (
        <>
            <div className='text-2xl font-bold text-center m-5'>
                <div>Trending Movies</div>
            </div>
            <div className="flex justify-evenly flexwrap gap-8">
                {movies.map((movieObj,idx)=>{
                    return (
                        <>
                            <MovieCard movieObj={movieObj} index={idx}/>
                        </>
                    );
                })}
            </div>
            <Pagination nextPageFn={handleNext} previousPageFn={handlePrev} pageNumber={pageNo}/>
        </>
    )
}

export default Movies;