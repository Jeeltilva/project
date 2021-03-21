import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Case } from '../models/case.model';
import { Router } from '@angular/router';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-client-cases',
  templateUrl: './client-cases.component.html',
  styleUrls: ['./client-cases.component.scss','../chats/chats.component.scss']
})
export class ClientCasesComponent implements OnInit ,OnDestroy{

  private caseSub: Subscription;
  cases: Case[];

  constructor(private breakpointObserver: BreakpointObserver, private caseService: CaseService, private router: Router) { }

  ngOnInit(): void {
    this.caseSub = this.caseService.getCasesUpdateListener().subscribe((data: Case[]) => {
      this.cases = data;
     });
    this.caseService.getClientCases();
  }
  panelOpenState = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  onView(id) {
    this.caseService.getLinkedLawyer(id)
    this.caseService.getCaseData(id);
    this.router.navigate(["/clientcaseinfo"]);
  }

  ngOnDestroy(): void {
    this.caseSub.unsubscribe();
  }

}
