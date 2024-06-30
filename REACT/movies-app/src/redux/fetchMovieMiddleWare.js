import MoviesSlice from "./movieSlice";
const actions=MoviesSlice.actions;

const fetchMiddleWare=(params)=>{
    return async function(dispatch){
        console.log('params', params);
        try{
            dispatch(actions.movieLoading(true));
            const resp=
            await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=a981769ddba1ce973560b980afd007f8&language=en-US&page=${params}`);
            const movieObj=await resp.json();
            dispatch(actions.movieData(movieObj.results));
        }
        catch(err){
            dispatch(actions.movieError());
        }finally{
            dispatch(actions.movieLoading());
        }
    }
}

export default fetchMiddleWare;