import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./ndex.css"
import Header from "./Header";
import Footer  from "./Footer";
import CreateNote from './CreateNote';
import Note from "./Note"
const App =()=>{

    return(
        <>
<Header/>
<CreateNote/>
<Note/>
<Footer/>



        </>
    )
}
export default App;