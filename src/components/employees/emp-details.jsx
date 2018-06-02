import React, { Component } from 'react'
import { mockEmployees } from './emp-mock-data';
import axios from 'axios';

export class EmpDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: null
    }
  }

  componentDidMount = () => {
    const empId = parseInt(this.props.match.params.id, 10);
    axios.get('http://localhost:8080/api/employees/' + empId)
      .then((res) => {
        this.setState({
          employee: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      this.state.employee ? <div className="ui card">
          <div className="content">
            <div className="header">
              Employee Details with id : {this.state.employee.id}
            </div>
            <div className="description">
              <p><strong>Emp No: </strong> {this.state.employee.empNo}</p>
              <p><strong>First Name: </strong> {this.state.employee.firstName}</p>
              <p><strong>Last Name: </strong> {this.state.employee.lastName}</p>
              <p><strong>City: </strong> {this.state.employee.city}</p>
            </div>
          </div> 
        </div> : null
    )
  }
  
}