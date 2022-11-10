import React, { useState } from "react";
import "./index.css"

const App = () => {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');

    const inputfname = (event) => {
         setfname(event.target.value); }
         
    const inputlname = (event) => {
         setlname(event.target.value); }


    const onSubmit = (event) => {
       event.preventDefault();
        setfirstname(fname);
        setlastname(lname);


    }
    return (
        <>
            <div>
            <form onSubmit={onSubmit}><center>
            <div>
                <h1>Hello {firstname} {lastname}</h1>
                </div>
                
                <input
                    type="text"
                    placeholder="Your first Name "
                    onChange={inputfname}
                    value={fname} />

                <input
                    type="text"
                    placeholder="Your Last Name "
                    onChange={inputlname}
                    value={lname} />

                <br />
                <button  type="submit">Submit Me 👍</button>
            </center></form> </div>
        </>

    );
}

export default App;
