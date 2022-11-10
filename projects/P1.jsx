import React from 'react';

import './P1.css';
function Project(){
    const img1 = "https://picsum.photos/300/400"
    const img2 = "https://picsum.photos/350/400"
    const img3 = "https://picsum.photos/400/400"
    return(
        <>
        <h1 className='heading'> hii ` This is image App</h1>
          <div className='img'>
          <img src={img1} alt="remdom img 1"/>
          <img src={img2} alt="remdom img 1"/>
          <img src={img3} alt="remdom img 1"/>
          </div>
          </>
    );
}
export default Project;






