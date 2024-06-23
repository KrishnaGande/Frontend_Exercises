import { useContext,useState,useEffect } from "react";
import genreids from "../constants";
import {WatchListContext} from '../context/WatchListContext';

function WatchList(){
    const {watchlist,setWatchlist}=useContext(WatchListContext);
    const [search,setSearch]=useState("");
    const [genreList,setGenreList]=useState(["All Genres","Thriller","Horror"]);
    const [currGenre,setCurrGenre]=useState("All Genres");

    const handlesearch=(e)=>{
        setSearch(e.target.value);
    }
    const genres=((genre_id)=>{
        return genreids[genre_id];
    })
    

    const handleAscendingRatings=(()=>{
        let sortAscending=watchlist.sort((movieObjA,movieObjB)=>{
            return movieObjA.vote_average-movieObjB.vote_average;
        });
        setWatchlist([...sortAscending]);
    });
    useEffect(() => {
        let temp = watchlist.map((movie) => {
        return genreids[movie.genre_ids[0]];
        });
        // set stores only the unique entries
        temp = new Set(temp);
        console.log(temp);
        setGenreList(["All Genres", ...temp]);
        // console.log([...temp])
        }, [watchlist]);

    const handleFilter = (genre) => {
        setCurrGenre(genre);
    };
            
        
    const handleDescendingRatings=(()=>{
        let sortDescending=watchlist.sort((movieObjA,movieObjB)=>{
            return movieObjB.vote_average-movieObjA.vote_average
        })
        setWatchlist([...sortDescending]);
    })
    return (
        <>
            <div className="flex justify-center m-4">
                {genreList.map((genre) => {
                    const isActive = currGenre === genre;
                    const baseStyles =
                    "flex justify-center items-center h-[3rem] w-[9rem] rounded-xltext-white font-bold mx-4";
                    const bgColor = isActive ? "bg-blue-400" : "bg-gray-400/50";
                    // eslint-disable-next-line react/jsx-key
                    return (<div onClick={handleFilter} className={`${baseStyles} ${bgColor}`}>{genre}</div>);
                })}
            </div>
            <div className="flex justify-center my-10">
                <input
                placeholder="search movies"
                className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border rounded-lg border-gray-300"
                type="text"
                onChange={handlesearch}
                value={search}>  
                </input>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-4 font-medium text-gray-900">Name
                            </th>
                            <th>
                                <div className="flex">
                                    <i
                                    onClick={handleAscendingRatings} 
                                    className="fa-solid fa-arrow-up hover:cursor-pointer mx-1"></i>
                                    <div>Ratings</div>
                                    <i 
                                    onClick={handleDescendingRatings}
                                    className="fa-solid fa-arrow-down hover:cursor-pointer mx-1"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex">
                                    <div>Popularity</div>
                                </div>
                            </th>
                            <th>
                                <div className="flex">
                                    <div>Genre</div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {watchlist
                    .filter((movie)=>{
                        if(currGenre=="All Genres"){
                            return true;
                        }else{
                            return genreids[movie.genre_ids[0]]==currGenre;
                        }
                    })
                    .filter((movie)=>{
                        return movie.title.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((movie)=>(

                        <tr className="hover:bg-gray-50" key={movie.id}>
                            <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                                <img className="h-[6rem] w-[10rem] object-fit" 
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt=""></img>
                                <div className="font-medium text-gray-700 text-sm ">{movie.title}</div>
                            </td>
                            <td className="pl-6 py-4">{movie.vote_average}</td>
                            <td className="pl-6 py-4">{movie.popularity}</td>
                            <td className="pl-6 py-4">{genres(movie.genre_ids[0])}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WatchList;