import { useState } from "react";


function MyForm(){

    const[input, setInput] = useState({});

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setInput(values => ({...values, [name]: value}));
    }

    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(input);
    }


    return (
        <form onSubmit={handelSubmit}>
            <label> Enter your name :
                <input type="text" 
                name="username"
                value={input.name }
                onChange={handleChange} />
            </label>

            <label>
                <input type="number"
                name="age"
                value={input.name}
                onChange={handleChange} />
            </label>

            <input type="submit" />
        </form>
    )
}

export default MyForm;