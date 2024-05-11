const Button=()=>{
    const handleClick=()=>{
        console.log("Button Clicked");
    };

    return (
        <button onClick={handleClick}>click me</button>
    )
}

export default Button;