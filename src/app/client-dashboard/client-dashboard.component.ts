import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss','../chats/chats.component.scss']
})
export class ClientDashboardComponent {

  total_cases: string
  total_admitted: string
  total_disposed: string
  /** Based on the screen size, switch from standard to one column per row */
  constructor(private breakpointObserver: BreakpointObserver, private caseService: CaseService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.caseService.getClientDashboard().subscribe((data:any) => {
      this.total_cases = data.total_cases;
      this.total_admitted = data.total_admitted;
      this.total_disposed = data.total_disposed;
    }, (err:any)=> {
      console.log(err)
    })
  }
}
