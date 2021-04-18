import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from "./services/auth.service";
import { ErrorService } from "./error/error.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  private roleSub: Subscription;
  private errorSub: Subscription;
  role:string;
  isLoading:boolean = true;
  hasError = false;
  verified: boolean = false;

  constructor(private authService: AuthService, private errorService: ErrorService) {}

  ngOnInit() {
    this.isLoading = true;
    this.roleSub = this.authService.getRoleListener().subscribe((role:string) => {
      this.role = role;
    });

    this.authService.autoAuthUser();
    this.isLoading = false;
    this.errorSub = this.errorService.getErrorListener().subscribe(
      message => this.hasError = message !== null
    );
  }

  ngOnDestroy() {
    this.roleSub.unsubscribe();
    this.errorSub.unsubscribe();
  }
}
