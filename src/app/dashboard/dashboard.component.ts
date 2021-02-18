import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total Cases', cols: 4, rows: 1, content: '10'},
          { title: 'Total Admitted Cases', cols: 4, rows: 1, content:'6' },
          { title: 'Total Disposed Cases', cols: 4, rows: 1, content:'4' },
          { title: 'Total Clients', cols: 4, rows: 1, content: '10' }
        ];
      }

      return [
        { title: 'Total Cases', cols: 1, rows: 1, content: '10'},
        { title: 'Total Admitted Cases', cols: 1, rows: 1, content:'6'  },
        { title: 'Total Disposed Cases', cols: 1, rows: 1, content: '4' },
        { title: 'Total Clients', cols: 1, rows: 1, content: '10' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
