import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { CaseService } from '../services/case.service';
import { Case } from '../models/case.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disposed',
  templateUrl: './disposed.component.html',
  styleUrls: ['./disposed.component.scss']
})
export class DisposedComponent implements OnInit, OnDestroy {
  private caseSub: Subscription;
  cases: Case[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private caseService: CaseService, private router: Router) { }

  ngOnInit() {
    this.caseSub = this.caseService.getCasesUpdateListener().subscribe((data: Case[]) => {
      this.cases = data;});
      this.caseService.getCases();
  }
  panelOpenState = false;

  onView(id) {
    this.caseService.getCaseData(id);
    this.caseService.getLinkedClient(id);
    this.router.navigate(["/caseinfo"]);
  }

  onDelete(id) {
    this.caseService.deleteCase(id);
    this.cases = this.cases.filter(function(e:Case) {return e._id !== id});
    this.caseService.setCases(this.cases);
    // this.caseService.getCases();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.caseSub.unsubscribe();
  }
}

