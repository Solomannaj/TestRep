import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { fail } from 'assert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  fm: any;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
        
  }

  ngOnInit(): void {
    const self = this;
    self.registerForm = self.formBuilder.group({
      UserName: ['', [Validators.required, Validators.minLength(6)]],
      Password: ['', Validators.required]
    });

    self.fm = self.registerForm.controls;
  } 
  onSubmit() {

    const self = this;    
    if (self.fm.UserName.value == 'soloman' && self.fm.Password.value == 'admin') {

      localStorage.setItem('IsLoggedIn', 'True');
      self.router.navigate(['home']);
    }
    else {    
      localStorage.setItem('IsLoggedIn', 'False');   
      self.router.navigate(['login']);
    }   
    self.submitted = true;
  }
}
