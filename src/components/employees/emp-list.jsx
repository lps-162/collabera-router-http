import React, { Component } from 'react'
import { mockEmployees } from './emp-mock-data';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class EmpList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      employees: []
    };
 
  }

  componentDidMount = () => {
    axios.get('http://localhost:8080/api/employees')
      .then((res) => {
        this.setState({
          employees: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const title = <h3> List of Employees </h3>;
    const empRows = this.state.employees.map(e => {
                              return (
                                <tr key={e.id}>
                                  <td>{e.id}</td>
                                  <td>{e.empNo}</td>
                                  <td>{e.firstName}</td> 
                                  <td>{e.lastName}</td>
                                  <td>{e.city}</td>
                                  <td>
                                    <Link className="ui basic blue button"
                                          to={`/employees/${e.id}`}>
                                      Show Details
                                    </Link>
                                  </td>
                                </tr>
                              )
                            });

    return (
      <div>
        {title}
        <table className="ui blue table striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Emp No</th> 
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {empRows}
          </tbody>
        </table>
      </div>
    )
  }
}
