import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Contact from './Contact';
import Person from './Person';
import Post from './Post';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password:'',
      persons : [
        {
          name: 'Varun',
          age: 28
        },
        {
          name: 'harshit',
          age: 20
        },
        {
          name: 'Abhishek',
          age: 20
        }
      ]
    };
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  showClick = (ind)=>{
    console.log(ind);
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Contact myNumber="9915296866" myEmail="cto.varun@gmail.com"/>
        </div>
        <input type="text" value={this.state.username} onChange={this.changeUsername}/> 
        <div>
          {this.state.username}
          {
            this.state.persons.map((v,i)=>{
              return (
                <h1 key={i} onClick={()=> this.showClick(i)}>{v.name} with {v.age}</h1>
              );
            })
          }
          <Person/>
          <Post/>
        </div>
      </div>
    );
  }
}

export default App;
