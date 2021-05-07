import React from 'react';
import Radium from 'radium'

const person = (props) => {
    const style = {
        '@media (min-width:500px)':{
            // width:'450px'
        }
    };
    return (
    <div className="Person" style={style}>
        <p onClick={props.click}>My name {props.name} and i am {props.age}</p>
        {props.children}
        <input type="text" onChange={props.changed} 
        value={props.name}/>
    </div>
    )
};

export default Radium(person);
