import React from "react";
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const ToDolist = () => {

  return (
    <>
      <h1 class="text-center text-danger text-capitalize my-5" >Wellcome to my App</h1>

      <div class="container ">
        <div class="row">
          <div class="col-sm"> <div class="card shadow" >
            <img src="https://picsum.photos/201/301" class="card-img-top" alt="..." height="201px"/>
            <div class="card-body ">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
          <div class="col-sm"> <div class="card shadow" >
            <img src="https://picsum.photos/201/302" class="card-img-top" alt="..." height="201px"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
          <div class="col-sm"> <div class="card shadow" >
            <img src="https://picsum.photos/201/303" class="card-img-top" alt="..." height="201px" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
        </div>
      </div>

    </>
  )
}
export default ToDolist;