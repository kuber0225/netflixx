import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote =()=>{

    return(
        <>
     <div className="main_note">
      <form>
        <input type='text' placeholder='Title' autoComplete="off"/>
        <textarea rows='' columan='' placeholder= "Writ a note..."/>
        <Button variant="contained" class><AddIcon/></Button>
      </form>

     </div>
        </>
    )
}
export default CreateNote;