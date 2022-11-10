import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card"
import "./card.css"
import carddata from "./Carddata";
ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 9 netflix series in 2022</h1>
  
    {carddata.map((val,index) =>{
      return (
        <Card
        key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}



  </>, document.getElementById('root')
);