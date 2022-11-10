import React from "react";
import {adding,sub,multiplication,Devsion} from "./P3";

function cal(){
    const st=
    {
      color:"red",
      textAlign:'center'
    };
    const stt = {

        color:'skyblue',
        textAlign:'center',
        listStyleType: 'none',
        
 


    };
 return(
        <>
  <ul>
  <h1 style={st}>This is calculation of two number </h1>
  <div style = {stt}>
    <li > Sum of two number {adding(40,4)}</li>
    <li> Sub of two number {sub(30,3)}</li>
    <li> Divsion of two number {Devsion(10,3)}</li>
    <li> Multiplication of two number {multiplication(10,3)}</li>

    </div>
    </ul>
</>
 );
 };
export default cal ;