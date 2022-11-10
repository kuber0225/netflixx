import React, { useState } from "react";

import "./index.css"
const App = () => {
  const [num,setnum] = useState(0);
  const incNum =()=>{
    setnum(num +1)
  }
  const decNum =()=>{
    if(num>0){
    setnum(num -1);
    }else{
        alert('Sorry , Zero limit Reached');
        setnum(0);
    }
   
  }
  const refresh=()=>{
    setnum(0)
  }
  
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num} </h1>
                    <button onClick={incNum}> Increment</button>  
                 <button onClick={decNum}> Decrement</button>
                 <button onClick={refresh}> Refresh</button>

                </div>
            </div>
        </>
    )
}
export default App;