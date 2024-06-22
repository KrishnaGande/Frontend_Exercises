import Movies from "./Movies";
import {useEffect, useState} from 'react';
import axios from 'axios';

function Banner(){
    const [bannerImage,setBannerImage]=useState("");
    const [title,setTitle]=useState("Placeholder title");
    useEffect(()=>{
    axios.
    get('https://api.themoviedb.org/3/trending/movie/day?api_key=a981769ddba1ce973560b980afd007f8&language=en-US&page=1')
    .then((response)=>{
        console.log("Films",response.data.response);
        const firstMovie=response.data.results[0];
        const firstMovieTitle=firstMovie.title;
        const firstMoviePoster=firstMovie["backdrop_path"];
        setTitle(firstMovieTitle);
        setBannerImage(`https://image.tmdb.org/t/p/original/${firstMoviePoster}`);
        })
    },[])
    return (
        <>
        <div
        className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
        style={{backgroundImage:`url(${bannerImage}`}}>
            <div className="text-white w-full text-center text-2xl">{title}</div>
        </div>
        <Movies/>
        </>
    )
}

export default Banner;