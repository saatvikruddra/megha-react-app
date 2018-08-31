import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Contact from './Contact';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password:''
    };
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
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
        </div>
      </div>
    );
  }
}

export default App;
