import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee';
import { Jobdetails } from '../models/jobdetails';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  fm: any;
  jobs: Jobdetails;
  @Input() employee: Employee;
  empName: string = "Hello";
  @Input() tittle: string;
  jobID: number = 0;

  @Output("getEmployees") getEmployees: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: DataapiService, private formBuilder: FormBuilder, private router: Router) {

 
  }

  ngOnInit(): void {

    const self = this;

    let job: Jobdetails= {Name:"",JobID:0 };
    self.employee = new Employee();
    self.employee.Name = "";
    self.employee.Address = "";
    self.employee.Age = 0;
    self.employee.JobDetails = job;     

    self.employeeForm = self.formBuilder.group({
      Name: ['', [Validators.required, Validators.minLength(6)]],
      JobID: ['', Validators.required],
      Address: ['', Validators.required],
      Age: ['', Validators.required]
      
    });

    self.fm = self.employeeForm.controls;
    self.getJobs();
  }

  SelectJob(filterVal: any) {
    const self = this;
    self.employee.JobID = filterVal;
  }

  getJobs() {
    const self = this;
    self.apiService.getJobs().subscribe((data) => {

      self.jobs = data;
    });
  }

  addEmployee() {
    const self = this;
    console.log(self.employee);
    if (self.employee.EmpID > 0) {

      self.apiService.editEmployee(self.employee).subscribe(data => {
        self.employee = new Employee();
        self.employee.JobDetails = new Jobdetails();
        self.getEmployees.emit();
      });
    }
    else {
      self.apiService.saveEmployee(self.employee).subscribe(data => {
        self.employee = new Employee();
        self.employee.JobDetails = new Jobdetails();
        self.getEmployees.emit();
      });
    }

  }

}
