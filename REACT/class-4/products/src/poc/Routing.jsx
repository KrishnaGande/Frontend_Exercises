import {Routes,Route,Link,useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';

function About(){
    return <h2>About Page</h2>
}
function Home(){
    return <h3>I am Home page</h3>
}

function Listing(){
    return <h3>I am Listing page</h3>
}

function PageNotFound(){
    return <h3>PageNotFound</h3>;
}

function Users(props){
    console.log(props.isAdmin);
    let params=useParams();
    const userID=params.id;
    console.log('param',params);
    let [user,setUser]=useState(null);
    useEffect(()=>{
        async function fetchData(){
            const resp= await fetch(`https://fakestoreapi.com/users/${params.id}`);
            const userData=await resp.json();
            console.log(userData);
            setUser(userData);
        }
        fetchData();
    },[]);
    return (
        <>
            {user==null?(
                <h3>...Loading</h3>
            ):(
                <>
                    <h4>User Name: {user.username}</h4>
                    <h3>Name: {user.name.firstname+" "+user.name.lastname}</h3>
                    <h4>Phone: {user.phone}</h4>
                </>
            )}
        </>
    );
}

function Routing(){
    return (
        <>
            <h1>Routing example</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home Page</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/listing'>Listing</Link>
                    </li>
                </ul>
            </nav>
<Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About/>}>{" "}</Route>
    <Route path='/listing' element={<Listing></Listing>}>{" "}</Route>
    <Route path='*' element={<PageNotFound></PageNotFound>}>{" "}</Route>
    <Route path='/abc' element={<navigate to='/'></navigate>}>{" "}</Route>
    <Route path='/users/:id' element={<Users isAdmin={true}></Users>}></Route>
</Routes>
        </>
    )
}

export default Routing;