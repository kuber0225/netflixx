import React, { useState } from "react";


const purple = "green";
// onclick function
const App = () => {

  const [bg,setbg] = useState(purple);
  const bgChange = ()=>{
    let newBg = "#34495e";
     setbg(newBg);
     setClickMe('Ouch!! 🤯 '); 
   }
// text change function
const [ClickMe ,setClickMe]  = useState("Click-Me");
const bgBack = () =>{
  setbg( purple);
  setClickMe('Ayyo!! 🐘');
}
  return(
    
<> 
<div style={{backgroundColor:bg}}>
  <button onMouseEnter={bgChange} onMouseOut ={bgBack} > {ClickMe} </button>
</div>
</>
  )};

export default App;