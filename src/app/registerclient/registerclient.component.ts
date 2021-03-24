import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MustMatch } from '../_helpers/must-match.validator';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-registerclient',
  templateUrl: './registerclient.component.html',
  styleUrls: ['./registerclient.component.css']
})
export class RegisterclientComponent implements OnInit {
  registerForm: FormGroup;
  submitted:boolean = false;
  maxDate = new Date();
  hide = true;
  hide1 = true;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phnno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      city: ['', Validators.required],
      gender: ['', [Validators.required]],
      birthdate: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', Validators.required]
    },
    {
            validator: MustMatch('password', 'confirmpassword')
        });
  }

  get data() { return this.registerForm.controls; }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.authService.createClient(this.registerForm.value, 'client');
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}
