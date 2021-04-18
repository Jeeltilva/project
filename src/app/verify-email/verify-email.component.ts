import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  private isVerified:boolean;
  role:String;
  roleSub: Subscription;
  myvar;
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.role  = this.authService.getRole()
    const check = () => {this.authService.checkStatus().subscribe( data => {
     this.isVerified = data;
      if((data == true && this.role == 'lawyer')) {
        this.router.navigate(["/dashboard"]);
        clearInterval(this.myvar)
      }
      if((data == true && this.role == 'client')) {
        this.router.navigate(["/clientdashboard"]);
        clearInterval(this.myvar)
      }
    })
  }

  this.myvar = setInterval( check, 2000);
 }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.myvar)
  }

}
