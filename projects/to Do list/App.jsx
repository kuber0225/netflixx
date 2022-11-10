import React, { useState } from "react";
import Todolist from './ToDolist'
import "./index.css"
const App = () => {
    const [inputlist, setinputList] = useState('');
    const [Items, setItems] = useState([]);
    const itemEvent = (event) => {
        setinputList(event.target.value);
    };
    const listofItem = () => {
        setItems((olditems) => {
            return [...olditems, inputlist];

        })

        setinputList('');
    };
    const deleteItems =(id)=>{
        setItems((olditems) => {
            return olditems.filter((arrElement,index)=>{
                return  index !== id;

            }) ;

        })

    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>

                    <input type='text' placeholder="Add a items" name="fname"
                        onChange={itemEvent}
                        value={inputlist}
                    />
                    <button onClick={listofItem}> + </button>

                    <ol>
                        {/* <li>{inputlist}</li> */}
                        {Items.map((itemsvelue, index) => {
                            return <Todolist
                                key={index}
                                id={index}
                                text={itemsvelue}
                                onSelect={deleteItems}
                                 />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default App;