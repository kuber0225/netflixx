 import React from "react";
 import SlotM from "./Slotgame";
  const App = () =>{
return(
    <>
        <h1 className="heading_style"> 🎰 Wellcome to {''}<span style = {{fontWeight:'bold'}}>Slot machine game</span>🎰</h1>
 <div className="card">
   <SlotM x = '😄' y = '😄' z = '😄'/ >
   <SlotM x = '🍎' y = '😄' z = '😄'/>
   <SlotM x = '😄' y = '🍌' z = '😄'/>
   <SlotM x = '🍎' y = '🍎' z = '🍎'/>

   </div>
   
    </>


)

  }
  export default App;
  