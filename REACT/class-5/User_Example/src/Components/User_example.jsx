import React,{useState,useEffect} from 'react';
import axios from 'axios';
function User(){
    const [user,setUser]=useState(null);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(function(){
        async function(){
            try {
                setLoading(true);
                const user={'name':'Krishna','phone':'abc'}
            // const resp = await fetch("https://jsonplaceholder.typicode.com/users/1")
            // const user = await resp.json();
            // console.log("user",user);
                setUser(user)
            }
        catch(err){
            setError(true);
        }
        finally{
            setLoading(false);
        }
        },
        },[]);
    const heading=<h2>User Example</h2>
    if(loading){
        return (
        <>
            <div>{heading}</div>
            <h3>...Loading</h3>
        </>)
    }

    if(error){
        return 
        <>
            {heading}
            <h3>Error occured!</h3>
        </>
    }

    return 
    <>
        {heading}
        <h4>Name : {data.name}</h4>
        <h4>Phone: {data.phone}</h4>
    </>
}

export default User;