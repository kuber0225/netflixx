import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import C1 from "./flying-bird-logo-elegant-design-dove-eagle-cosmetics-fashion-luxury-logotype_126523-2767.png"
import "./ndex.css"

import Button from '@mui/material/Button';
const Header =()=>{
  const commonStyles = {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '50%',
  };

    return(
        <>
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src={C1} width="60" height="40" className="d-inline-block align-top" alt=""/>Deepak Keep
  </a>
  <h1 className="notnev">Notes making project</h1>
</nav>

        </>
    )
}
export default Header;