import React, { useState } from 'react';


function App() {

  console.log(App);
  let currentTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState();
  return (
    <>
      <h1 className='ht'>Get-current Time/Date</h1>
      <div className='click'>
        <h1 className='heading'>{ctime}</h1>
        <button onClick={(App) => setCtime(new Date().toLocaleTimeString())}>
          Get Time
        </button>
        <button onClick={(App) => setCtime(new Date().toLocaleDateString())}>
          Get Date
        </button>
      </div>
    </>
  );
}
export default App;