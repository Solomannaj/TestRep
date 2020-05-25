import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee';
import { Jobdetails } from './models/jobdetails';

@Injectable(
  {providedIn: 'root'}
)

export class DataapiService {



  constructor(private httpClient: HttpClient) { }

  public getEmployees() {
    return this.httpClient.get<Employee>(`http://localhost:56859/api/Employee/GetEmployees`);
  }

  public getJobs() {
    return this.httpClient.get<Jobdetails>(`http://localhost:56859/api/Employee/GetJobs`);
  }

  public deleteEmployees(empID: number) {
    return this.httpClient.delete<number>(`http://localhost:56859/api/Employee/DeleteEmployee?empID=` + empID);
  }

  public saveEmployee(employee:Employee) {
    console.log(employee);
    return this.httpClient.post<Employee>(`http://localhost:56859/api/Employee/SaveEmployee`, employee);
  }

  public editEmployee(employee: Employee) {
    console.log(employee);
    return this.httpClient.put<Employee>(`http://localhost:56859/api/Employee/EditEmployee`, employee);
  }

}
