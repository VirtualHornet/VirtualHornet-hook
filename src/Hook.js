import React,{useEffect, useState} from 'react';

export default (props) =>{
    
   const [ counter, setCounter ]=useState(0);
   const [ counter2, setCounter2 ]=useState(2);

   const increaseCounter =() =>{
        setCounter(counter+1)
   };

   const increaseCounter2 =() =>{
    setCounter2(counter2+1)
};


  /* useEffect(()=>{
    console.log('Hello')
    document.addEventListener('click')
    return () =>{
        console.log('bye');    
    }
   },[]);*/

    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increaseCounter} type='button' >
                Add+1
            </button>
        <br/>
        <p>Counter 2: {counter2}</p>
        <button onClick={increaseCounter2} type='button' >
            Add+1
        </button>
    </div>             
    );
} 
