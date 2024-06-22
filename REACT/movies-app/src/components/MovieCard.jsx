

function MovieCard({movieObj,index}) {
  return (
    <div>
        <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl
            hover:scale-110 duration-300 hover:cursor-pointer flex flex-col"
            style={{backgroundImage:`url(${movieObj.url}`}} key={index}>
            <div className="text-white w-full text-center 
                text-xl p-2 bg-gray-900/70 rounded-lg">
                {movieObj.title}
            </div>
        </div>
    </div>
  )
}

export default MovieCard
