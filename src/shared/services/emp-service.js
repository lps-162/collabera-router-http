import axios from 'axios';

export class EmpService {

  getEmployees() {
    const empPromise = axios.get('http://localhost:8080/api/employees') 
                            .then(res => res.data);

    return empPromise;
  }

}