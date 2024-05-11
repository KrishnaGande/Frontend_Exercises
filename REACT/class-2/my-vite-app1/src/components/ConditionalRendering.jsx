const ConditionalRendering=({isLoggedIn,username})=>{
    return (
        <div>
            {isLoggedIn?(<h3>Welcome,{username}!</h3>):
            (<h1>Please log in to continue.</h1>)
            }
        </div>
    )
}

export default ConditionalRendering;