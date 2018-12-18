import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WOW from 'wow.js';

class App extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div className="wow test bounceIn">
          <h1>Stuff to move</h1>
        </div>
      </div>
    );
  }
}

export default App;
