import React from 'react';
import "../CSS/Person.css"
const Person = (props) =>{
    return (
        <div id="container">
                   <div id="person">
            <h3>{props.id}Hi, i'm {props.name} and i'm {props.age} Years old</h3>
            <p>Done by props passing</p>
            {/* <button onClick={props.delete}> Delete Person</button> */}
            <input type='text' onChange={props.changed} value={props.name}></input>
    
        </div>
        </div>
 
        )
}

export default Person;