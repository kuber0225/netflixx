import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import "./index.css"
import Listcom from "./Listcom";

const ToDolist = () => {
    // THIS IS HOOK
    const [item,setitem] = useState('');
    const [newitem,setnewitem] = useState([]);

    // it is using for acess data from input  enter by the user 
  const itemEvent = (event)=>{
    setitem(event.target.value)
  }

  // this is using for click button 
  const listofitem =()=>{
    setnewitem((preVelue)=>{
        return [...preVelue,item]

    });
    setitem('');
  }
 




  // this is using for styling button
    const commonStyles = {
        width: '3.5rem',
        height: '3.5rem',
        marginLeft:'20px',
        borderRadius: '50%',
      };
  
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                <br />
                    <h1>ToDo List</h1>

                    <input type='text' placeholder="Add a items" name="fname"
                      onChange={itemEvent} value={item}
                    />
                    <Button variant="contained" sx={{ ...commonStyles }} onClick={listofitem}> <AddIcon/> </Button>
                <ol>
         
                   { newitem.map((val,index)=>{
                        return  <Listcom  key={index} text={val}/>

                    })}
                </ol>
                </div>

            </div>

        </>
    )
}
export default ToDolist;