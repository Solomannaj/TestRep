import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee';
import { Jobdetails } from './models/jobdetails';
import { Observable } from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)

export class DataapiService {

ngOnInit(): void{

}

  constructor(private httpClient: HttpClient) { }

  public getEmployees():Observable<Employee> {
    return this.httpClient.get<Employee>(`http://localhost:56859/api/Employee/GetEmployees`);
  }

  public getJobs():Observable<Jobdetails> {
    return this.httpClient.get<Jobdetails>(`http://localhost:56859/api/Employee/GetJobs`);
  }

  public deleteEmployees(empID: number):Observable<Number>{
    return this.httpClient.delete<number>(`http://localhost:56859/api/Employee/DeleteEmployee?empID=` + empID);
  }

  public saveEmployee(employee:Employee):Observable<Employee> {
    console.log(employee);
    return this.httpClient.post<Employee>(`http://localhost:56859/api/Employee/SaveEmployee`, employee);
  }

  public editEmployee(employee: Employee):Observable<Employee> {
    console.log(employee);
    return this.httpClient.put<Employee>(`http://localhost:56859/api/Employee/EditEmployee`, employee);
  }

}
