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
    return of(!this.bcnList.includes(parseInt(bcn)));
  }

  bcnValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfbcnExists(control.value).pipe(
        map(res => {
          console.log(res);
          // if res is true, exists, return true
          return res ? { bcnExists: true } : null;
          // NB: Return null if there is no error
        })
      );
    };
  }
}
