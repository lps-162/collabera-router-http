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
      done: false,
      createdId: null,
      errors: {}
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
    
    const newEmp = this.state.employee;
    let errors = {};
    if (newEmp.empNo === '') errors.empNo = 'Emp No cant be empty';
    if (newEmp.firstName === '') errors.firstName = 'First Name cant be empty';
    if (newEmp.lastName === '') errors.lastName = 'Last Name cant be empty';
    if (newEmp.city === '') errors.city = 'City cant be empty';

    console.log(errors);
    const noOfErrors = Object.keys(errors).length;
    let isFormValid = false;
    if (noOfErrors === 0) isFormValid = true;
    else isFormValid = false;

    this.setState({
      errors
    });

    if (isFormValid) {
      axios.post('http://localhost:8080/api/employees', this.state.employee)
      .then((res) => {
        this.setState({
          done: true,
          createdId: res.data.id
        })
      })
      .catch((err) => {
        console.log(err);
      });
    }
  
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
                  <span>{this.state.errors.empNo}</span>
                </div>
                <div className="field">
                  <label>First Name</label>
                  <input type="text"
                          name="firstName"
                          value={this.state.employee.firstName}
                          onChange={this.handleChange} />
                  <span>{this.state.errors.firstName}</span>
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input type="text"
                          name="lastName"
                          value={this.state.employee.lastName}
                          onChange={this.handleChange} />
                  <span>{this.state.errors.lastName}</span>
                </div>
                <div className="field">
                  <label>City</label>
                  <input type="text"
                          name="city"
                          value={this.state.employee.city}
                          onChange={this.handleChange} />
                  <span>{this.state.errors.city}</span>
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
            { this.state.done ? <Redirect to={`/employees/${this.state.createdId}`} /> : empForm }
          </div>
        </div>
      </div>
      
    )
  }
}
