import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, fromEvent, interval } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';
//import { DataapiService } from './dataapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {

  title:string='my-app';

  constructor(private router: Router) {

  }
ngOnInit():void {
  
 const obs = Observable.create(obv => {

  obv.next('hello')
  obv.next('world');

 });
 obs.finaly(_=>console.log('done'))
 .takeUntil(1)
 .subscribe(_=>console.log('subscribing'));
// var butt= document.querySelector('#btnClick');

// const obs =fromEvent(butt,'click')

//  obs
// //  .pipe(throttleTime(1000)) 
//  .subscribe(_ => alert('btnClick event occured'));

// const obs = interval(1);

// const sbs=  obs
// .finaly()
// .subscribe(_=>console.log('timer'));

// sbs.unsubscribe();


 }

 

}
