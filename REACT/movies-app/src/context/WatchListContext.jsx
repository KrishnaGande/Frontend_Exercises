import {createContext} from 'react';
import {useState,useEffect} from 'react';

const WatchListContext=createContext();

export default function WatchListContextWrapper({children}){
    const [watchlist,setWatchlist]=useState([]);

    const addToWatchlist=(movieObj)=>{
        const updatedWatchlist=[...watchlist,movieObj];
        setWatchlist(updatedWatchlist);
        localStorage.setItem('movies',JSON.stringify(updatedWatchlist));
    }

    const removeFromWatchlist=(movieObj)=>{
        let filteredwatchlist=watchlist.filter((movie)=>{
            return movie.id!=movieObj.id;
        })
        setWatchlist(filteredwatchlist);
        localStorage.setItem('movies',JSON.stringify(filteredwatchlist))
    }

    useEffect(()=>{
        let moviesFromLocalStorage=localStorage.getItem('movies');
        if(moviesFromLocalStorage){
            setWatchlist(JSON.parse(moviesFromLocalStorage))
        }
        return;
    },[]);

    return <WatchListContext.Provider value={{addToWatchlist,removeFromWatchlist,watchlist,setWatchlist}}>{children}{" "}</WatchListContext.Provider>;
}

export {WatchListContext};