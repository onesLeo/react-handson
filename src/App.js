import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', nama: 'Leonardo Ginting', umur: 29 },
      { id: '2', nama: 'Regina Natalia', umur: 28 },
    ],
    otherState: 'i am the other state',
    showData: false
  };

  switchEvent = () => {
    console.log("was clicked!");
    this.setState({
      persons: [
        { nama: 'Leonardo Ganteng', umur: 33 },
        { nama: 'Regina Natalia', umur: 30 }
      ]
    });
  }


  nameChangeHandler = (event, id) => {
    console.log("namechangedhandler was clicked!");
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const person ={
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: [
        { nama: event.target.value, umur: 33 },
        { nama: 'Regina Natalia', umur: 30 }
      ]
    });
  }

  showDataEvent = () => {
    const showDem = this.state.showData;
    this.setState({
      showData: !showDem
    });
  }

  deleteData(indexData){
    const newDataArr = this.state.persons;
    newDataArr.splice(indexData,1);
    this.setState({
      persons: newDataArr
    })
  }

render() {
	let showDataList = null;

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

if(this.state.showData){
	showDataList = (
			<div>
        {
          this.state.persons.map((person,indexData) => {
            return <Person name={person.nama}
             
            age={person.umur} click={() => this.deleteData(indexData)}
            key={person.id} 
            changed={(event)=> this.nameChangeHandler(event,person.id) }/>
          })
        }
      
      </div> 
	);


}

let myCssClasses  = ['red','bold'].join(' ');

const cssClasses = [];

if(this.state.persons.length <= 2){
    cssClasses.push('red');
}

if(this.state.persons.length <=1){
  cssClasses.push('bold');
}

	
    return (
      <div className="App">
        <h1 className={cssClasses}>Hi, this is my first testing of React!</h1>
        <button className={myCssClasses} onClick={this.showDataEvent}>
          Click Me</button>
          {showDataList}
        </div>
    );
    // return React.createElement('div',null, React.createElement('h1',null,'Does this work?'));
  }
}

export default App;