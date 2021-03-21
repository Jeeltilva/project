import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BcnValidationService {
  bcnList = [123456789123,525252545454,290729072907];

  constructor() {}

  checkIfbcnExists(bcn:string): Observable<boolean> {
    // normally, this is where you will connect to your backend for validation lookup
    // using http, we simulate an internet connection by delaying it by a second
    return of(!this.bcnList.includes(parseInt(bcn)));
  }

  bcnValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfbcnExists(control.value).pipe(
        map(res => {
          console.log(res);
          // if res is true, username exists, return true
          return res ? { bcnExists: true } : null;
          // NB: Return null if there is no error
        })
      );
    };
  }
}
