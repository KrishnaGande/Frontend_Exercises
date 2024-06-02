import { useState } from "react";
/*eslint-disable*/
function Movies(){
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
                {movies.map((movieObj)=>{
                    return (
                        <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl
                        hover:scale-110 duration-300 hover:cursor-pointer flex flex-col"
                        style={{backgroundImage:`url(${movieObj.url}`}}>
                            <div className="text-white w-full text-center 
                            text-xl p-2bg-gray-900/70">{movieObj.title}</div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Movies;