import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';

import { Home } from './components/common/home';
import { About } from './components/common/about';
import { EmpList } from './components/employees/emp-list';
import { EmpDetails } from './components/employees/emp-details';
import { EmpForm } from './components/employees/emp-form';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui menu four item">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/employees">Employees</Link>
          <Link className="item" to="/employees/new">Add New Employee</Link>
          <Link className="item" to="/about">About</Link>

        </div>
        <h3>
          Learning Routing and Http
        </h3>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/employees" component={EmpList} />
          <Route path="/about" component={About} />
          <Route exact path="/employees/new" component={EmpForm} />
          <Route exact path="/employees/:id" component={EmpDetails} />
          
        </Switch>
        
      </div>
    );
  }
}

export default App;
