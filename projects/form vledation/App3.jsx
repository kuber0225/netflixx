import React, { useState } from "react";
import "./index.css"

const App = () => {
    const [fullName, setFullName] = useState({
        fname:'',
        lname:'',
        email:'',
       phoneNo:'',

    });
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
   
 const { name, value}  = event.target;

        setFullName((preValue) => {
            console.log(preValue);
            return{
                ...preValue,
                [name]:value
            };
          

    });
};

   const onSubmit = (event) => {
       event.preventDefault();
       alert('form Submit')
    }
    return (
        <>
            <div>
            <form onSubmit={onSubmit}><center>
            <div>
                <h1>Hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email}</p>
                <p>{fullName.phoneNo}</p>
                </div>
                
                <input
                    type="text"
                    placeholder="Your first Name "
                    name="fname"
                    onChange={inputEvent}
                    value={fullName.fname}
                     />

                <input
                    type="text"
                    placeholder="Your Last Name "
                    name="lname"
                    onChange={inputEvent}
                    value={fullName.lname} 
                    />
                    <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    onChange={inputEvent}
                    value={fullName.email} 
                    />
                    <input
                    type="number"
                    placeholder="Enter your phone No "
                    name="phoneNo"
                    onChange={inputEvent}
                    value={fullName.phoneNo} 
                    />

                <br />
                <button  type="submit">Submit Me 👍</button>
            </center></form> </div>
        </>

    );
}

export default App;
