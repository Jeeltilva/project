import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  total_cases: string
  total_admitted: string
  total_disposed: string
  total_clients: string
  /** Based on the screen size, switch from standard to one column per row */

  constructor(private breakpointObserver: BreakpointObserver, private caseService: CaseService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.caseService.getLawyerDashboard().subscribe((data:any) => {
      this.total_cases = data.total_cases;
      this.total_admitted = data.total_admitted;
      this.total_disposed = data.total_disposed;
      this.total_clients = data.total_clients;
    }, (err:any)=> {
      console.log(err)
    })
  }
}
