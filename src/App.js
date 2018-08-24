import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Contact myNumber="9915296866" myEmail="cto.varun@gmail.com"/>
        </div>
      </div>
    );
  }
}

export default App;
