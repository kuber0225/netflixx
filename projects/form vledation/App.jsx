import React, { useState } from "react";
import "./index.css";

const App = () => {
    const [name,    setName] = useState('');
    const [fullName,    setfullName] = useState('');
     const inputEvent =(event)=>{
    //    console.log(event.target.value);
       setName(event.target.value);
     }
const onSubmit=()=>{
    setfullName(name)
}
    return(
    <>
<div><center>
    <h1>Hello {fullName}</h1>
    <input type="text" placeholder = "Enter your name" onChange={inputEvent} value={name}/>
    <button onClick={onSubmit}>Click-Me</button></center>
</div>
    </>
    );


}
export default App;