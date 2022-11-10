import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';

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
                   
                   <Button onClick={incNum} className="btadd"> <AddIcon /> </Button> 
                   <Button onClick={decNum} className="btsub"><DeleteIcon /></Button>
                 <Button onClick={refresh} className="btref"> <RefreshIcon /></Button>

                </div>
            </div>
        </>
    )
}
export default App;