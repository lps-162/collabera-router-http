import React, { Component } from 'react';
import { EmpService } from '../../shared/services/emp-service';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

export class EmpGrid extends Component {

  constructor(props) {
      super(props);
      this.state = {};
      this.empService = new EmpService();
  }

  componentDidMount() {
    this.empService.getEmployees()
    .then(employees => this.setState({employees}))
    .catch(err => console.log(err));
  }

  render() {
      return (
          <DataTable value={this.state.employees} responsive={true}>
              <Column field="empNo" header="Vin" />
              <Column field="firstName" header="Year" />
              <Column field="lastName" header="Brand" />
              <Column field="city" header="Color" />
          </DataTable>
      );
  }
}