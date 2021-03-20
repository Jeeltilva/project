import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-client-main-nav',
  templateUrl: './client-main-nav.component.html',
  styleUrls: ['./client-main-nav.component.scss']
})
export class ClientMainNavComponent {

  link1:boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService : AuthService) {}

  selectList() {
    this.link1=!this.link1;
  }

  logoutLawyer () {
    this.authService.logoutLawyer()
  }
}
