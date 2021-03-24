import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MustMatch } from '../_helpers/must-match.validator';
import { Lawyer } from "../models/lawyer.model";
import { AuthService } from '../services/auth.service';
import { BcnValidationService } from '../services/bcn.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  maxDate = new Date();
  hide = true;
  hide1 = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar, private authSer: AuthService, private bcnService: BcnValidationService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phnno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      address: ['', Validators.required],
      uni: ['', Validators.required],
      city: ['', Validators.required],
      prac: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', Validators.required],
      bcn: ['',[Validators.required], [this.bcnService.bcnValidator()]],
      nationality: ['', Validators.required]
    },
    	{
            validator: MustMatch('password', 'confirmpassword')
        });
  }

  hasError(field: string, error: string): boolean {
    if (error === 'any' || error === '') {
      return (
        this.registerForm.controls[field].dirty &&
        this.registerForm.controls[field].invalid
      );
    }

    //  this.frmLogin.controls[field].pending;

    return (
      this.registerForm.controls[field].dirty &&
      this.registerForm.controls[field].hasError(error)
    );
  }
  get data() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    const value = this.registerForm.value;
    const form = new Lawyer(value.firstname,
      value.lastname,
      value.birthdate,
      value.email,
      value.phnno,
      value.year,
      value.address,
      value.uni,
      value.city,
      value.gender,
      value.prac,
      value.password,
      value.bcn,
      value.nationality);
      this.authSer.createLawyer(form, "lawyer");
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}
