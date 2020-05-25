import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
//import { DataapiService } from './dataapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {

  constructor(private router: Router) {

  }

}
