import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Clients } from './Clients'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <div>
            <ul>
              <li>
                <Link to="/home">Home / </Link>
                <Link to="/about">About / </Link>
                <Link to="/contact">Contact / </Link>
                <Link to="/clients">Clients</Link>
              </li>
            </ul>
          </div>
        </div>
        <switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/clients' component={Clients}></Route>
      </switch>
      </div>      
    );
  }
}

export default App;
