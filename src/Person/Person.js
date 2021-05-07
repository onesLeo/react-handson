import React from 'react';

const person = (props) => {
    return <div className="Person">
        <p onClick={props.click}>My name {props.name} and i am {props.age}</p>
        {props.children}
        <input type="text" onChange={props.changed} 
        value={props.name}/>
    </div>
};

export default person;