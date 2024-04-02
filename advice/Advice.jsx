import React, { useEffect, useState } from "react";
import "./Advice.css"

function Advice() {

    const [advice,setAdvice]= useState("Click the Button to Get the Advice")
    const [count,setCount] = useState(0)
    
   
    async function click (){
        const res = await fetch("https://api.adviceslip.com/advice")
        //   console.log("this",res)
          const data = await res.json()
                // console.log(data)
               setAdvice (data.slip.advice)

               // change the count

             setCount((count)=>count+1)
    }

    // automatic ah page refresh ahathum advice vara

    useEffect(()=>{
      click()
    } , [ ])



  return (
    <div className="advice">
        <h3>{advice}</h3>
       <div className="but"><button onClick={click}>Click Me</button></div> 
        <p> Today You Got {count} Advice <h4>&#128512;</h4></p>
    </div>
  );
}

export default Advice;
