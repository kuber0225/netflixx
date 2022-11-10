import DeleteIcon from '@mui/icons-material/Delete';
import React, {useState} from 'react';
 const Listcom =(props)=>{
const [line , setLine]= useState(false);
 const cutIt=()=>{
    setLine(true);
 }
    const commonStyles = {
        marginLeft:'20px',
        borderRadius: '50%',
        boxShadow: "20px 20px 60px 2px grey",
    "&:hover": {
        background: "red"
      },
      };
    return(
        <><div className='todo_style'>
            <span onClick={cutIt}>
             <DeleteIcon sx={{ ...commonStyles, }}/> 
             </span>

            <li style={{textDecoration:line ? "line-through":"none"}}> {props.text} </li>
              </div>
        </>
    )
 } 
 export default Listcom ;