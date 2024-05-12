import {useState} from 'react';

const SimpleForm=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const handleSubmit=(event)=>{
        event.prevenDefault();

        console.log(`Name: ${name}, Email: ${email}`);

        setName("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input
                type='text'
                id='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input
                type='text'
                id='email'
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default SimpleForm;