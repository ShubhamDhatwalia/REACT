import { useState } from "react";
import Prop from "./Prop.js";
import MyForm from "./MyForm.js";

function Car(){
    const[car, setCar] = useState({
      brand: "Ford",
      model : "Mustang",
      color: "Red"
    });

    function handleClick(e) {  
      e.preventDefault();  
      console.log('You had clicked a Link.');  
    }  
  
   const updateCar = ()=>{
        setCar(prevState =>{
            return {...prevState , color: "blue"}
        });
    }
  
    return(
      <>
      <h3>{car.color} {car.model}</h3>
      
      <button type="button" onClick={updateCar}>Change Color</button>

      <a href="https://www.javatpoint.com/react-events" onClick={handleClick}>  
              Click_Me  
        </a>  

      < Prop name="Shubham" age={23} />

      <MyForm />
      
      </>
    )
  }
  
  export default Car;