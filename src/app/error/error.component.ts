import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Observable, of, fromEvent } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  state: Observable<string>;
  
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {   
    this.state = this.activatedRoute.paramMap

    .pipe( map(() => window.history.state.errorDet))
  }

}
