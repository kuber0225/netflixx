import React from 'react';
import './P2.css'; 
function P2() {


    let currentDate = new Date();
    currentDate = currentDate.getHours();

    let greeting = '';
    let cssstyle = {};
    if (currentDate >= 1 && currentDate < 12) {
        greeting = "Good Morning";
        cssstyle.color = 'green';
    } else if (currentDate >= 12 && currentDate < 19) {
        greeting = "Good Afternoon";
        cssstyle.color = 'blue';
    } else {
        greeting = "Good Night";
        cssstyle.color = 'black';
    }

    const nom = {
        color: 'red',
        textTransform: ' capitalize',
        textAlign: 'center',
        marginTop: '70px ;'

    }
    return (
        <>
            <div>
                <h1 style={nom}>hello sir,<span style={cssstyle}> {`${greeting}`} </span> </h1>
            </div>
        </>
    );
}
export default P2;






