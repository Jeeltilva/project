import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService : AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get data() { return this.loginForm.controls; }

  onSubmit() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   } else if (this.data.username.value == localStorage.getItem("username") && this.data.password.value == localStorage.getItem("password")) {
  //     this.router.navigate(['/home']);
  //   } else {
  //     this.submitted = true;
  //   }
  const value = this.loginForm.value;
    this.authService.loginLawyer(value.username, value.password, "lawyer")
  }
}
