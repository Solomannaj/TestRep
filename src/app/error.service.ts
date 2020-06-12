import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

  constructor(private injector: Injector) { }
     handleError(error: any) {
      const router = this.injector.get(Router);
      if (error instanceof HttpErrorResponse) {
       console.log(error.message);
       console.error("an error occurred here broo");
      }
      else {
       console.error("an error occurred here broo");
      }
      router.navigateByUrl('error', {state: {errorDet: error.message}});
      }

}
