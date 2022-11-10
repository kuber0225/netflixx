import React, { useState } from 'react';


function App() {
  // let zero = 0;
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <>
     <div className='click'>
     <h1 className="heading"> {count}</h1>
    
     <button onClick={(App) => setCount(count + 1)}>
          Add
        </button>
        <button onClick={(App) => setCount(0)}>
          Reset
        </button>
        <button onClick={(App) => setCount(count - 1)}>
          Subtrect
        </button> 

      </div>
    </>
  );
}
export default App;