

function MovieCard({movieObj,index,addToWatchlist,watchlist,removeFromWatchlist}) {
  const doesContain=(movieObject)=>{
    for(let i=0;i<watchlist.length;i++){
        if(watchlist[i].id===movieObject.id){
          return true;
        }
      }
    return false;
  }
  return (
    <div>
        <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl
            hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
            style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}} key={index}>
            {
            doesContain(movieObj)?(
            <div 
            className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-red-900/60" 
            onClick={()=>removeFromWatchlist(movieObj)}>
              ❌
            </div>):(
            <div 
            className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60" 
            onClick={()=>addToWatchlist(movieObj)}>
              😍
            </div>)
            }
            <div className="text-white w-full text-center 
                text-xl p-2 rounded-lg bg-gray-900/70 ">
                {movieObj.title}
            </div>
        </div>
    </div>
  )
}

export default MovieCard
