import React, { useState, useEffect  } from 'react';

export default function Clock() {
    
 
   const [date,setDate] =useState(new Date().toLocaleTimeString());

   useEffect(() => {
       var timerID=setInterval(() => tick(),1000)
       return function cleanup() {
           clearInterval(timerID)
       }
   })

   function tick() {
       setDate(new Date().toLocaleTimeString())
   }


    return (
        
            <div className="clock">

            <h1>Time is: {date}</h1>
            
            </div>
      
     
    )
}

