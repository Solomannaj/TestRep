import { Component, OnInit, Input } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { Jobdetails } from '../models/jobdetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Employee;
  selectedEmployee: Employee;
  tittle: string = "Add Employee";

  constructor(private apiService: DataapiService, private router: Router) { }

  ngOnInit(): void {

    this.getEmployees();

  }

  getEmployees() {

    this.apiService.getEmployees().subscribe((data) => {

      this.employees = data;
    });
  }

  editEmployee(emplyee:Employee) {

    this.tittle = "Edit Employee";
    this.selectedEmployee = emplyee;

  }

  addEmployee() {
    this.tittle = "Add Employee";
    this.selectedEmployee = new Employee();
    this.selectedEmployee.JobDetails = new Jobdetails();  
  }

  deleteEmployee(empId:number) {

    this.apiService.deleteEmployees(empId).subscribe((data) => {

      this.getEmployees();
    });
  }

}
