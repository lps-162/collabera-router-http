import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class EmpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: {
        empNo: '',
        firstName: '',
        lastName: '',
        city: ''
      },
      done: false
    }
  }

  handleChange = (evt) => {
    // this.setState({
    //   [evt.target.name]: evt.target.value
    // })
    let employee = Object.assign({}, this.state.employee, { [evt.target.name]: evt.target.value });
    this.setState({
      employee: employee
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.employee);
    axios.post('http://localhost:8080/api/employees', this.state.employee)
      .then((res) => {
        this.setState({
          done: true
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const empForm = (
            <form onSubmit={this.handleSubmit} className="ui form">
                <div className="field">
                  <label>Emp No</label>
                  <input type="text"
                          name="empNo" 
                          value={this.state.employee.empNo}
                          onChange={this.handleChange} />
                </div>
                <div className="field">
                  <label>First Name</label>
                  <input type="text"
                          name="firstName"
                          value={this.state.employee.firstName}
                          onChange={this.handleChange} />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input type="text"
                          name="lastName"
                          value={this.state.employee.lastName}
                          onChange={this.handleChange} />
                </div>
                <div className="field">
                  <label>City</label>
                  <input type="text"
                          name="city"
                          value={this.state.employee.city}
                          onChange={this.handleChange} />
                </div>
                <button className="ui blue basic button">
                  Add Employee
                  </button>
              </form>
    );

    return (
      <div className="ui grid">
        <div className="row">
          <div className="six wide column">
            { this.state.done ? <Redirect to="/employees" /> : empForm }
          </div>
        </div>
      </div>
      
    )
  }
}
