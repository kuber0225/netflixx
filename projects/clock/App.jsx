import React, { useState } from 'react';


const App = () =>{
   let currentTime = new Date().toLocaleTimeString();
      const [ctime, setCtime] = useState(currentTime);
 const UpdateTime = () =>{
  currentTime = new Date().toLocaleTimeString();
  setCtime(currentTime )
 };

  // const [ctime, setCtime] = useState(currentTime);

  setInterval(UpdateTime,1000);
  return (
    <>
        <h1>{ctime}</h1>
 

      {/* <h1 className='ht'>Get-current Time/Date</h1>
      <div className='click'>
        <h1 className='heading'>{ctime}</h1>
        <button onClick={(App) => setCtime(new Date().toLocaleTimeString())}>
          Get Time
        </button>
        <button onClick={(App) => setCtime(new Date().toLocaleDateString())}>
          Get Date
        </button>
      </div> */}
    </>
  );
}
export default App;