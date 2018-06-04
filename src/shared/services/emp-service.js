import axios from 'axios';

export class EmpService {

  getEmployees() {
    const empPromise = axios.get('http://localhost:8080/api/employees');
    return empPromise;
  }
}