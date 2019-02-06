import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import NavBar from './NavBar';
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <header className="App-header">
            <NavBar UserLoggedIn={false} username="john"/>
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
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="" component={Home}/>
          </Switch>
          </div>
        </Router>
      </div> 
    );
  }
}

export default App;
