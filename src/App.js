import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

import { Route } from 'react-router-dom';

import { Home } from './components/common/home';
import { About } from './components/common/about';
import { EmpList } from './components/employees/emp-list';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui menu four item">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/employees">Employees</Link>
          <Link className="item" to="/about">About</Link>
          <Link className="item" to="/employees">Employees</Link>

        </div>
        <h3>
          Learning Routing and Http
        </h3>

        <Route exact path="/" component={Home} />
        <Route exact path="/employees" component={EmpList} />
        <Route path="/employees/:id" component={About} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
