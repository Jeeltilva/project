import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Case } from '../models/case.model';
import { CaseService } from "../services/case.service";

@Component({
  selector: 'app-editcase',
  templateUrl: './editcase.component.html',
  styleUrls: ['./editcase.component.scss']
})
export class EditcaseComponent implements OnInit{

  private caseSub:Subscription;
  File:Case;
  private id:string;
  breakpointObserver: any;

  constructor(private caseService: CaseService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.caseService.getId();
    this.caseService.getCaseData(this.id);
    this.caseSub = this.caseService.getsingleCaseUpdateListener().subscribe((data:Case) => {
      this.File = data;
    })
  }
  @ViewChild('editcase') form:NgForm;

  
  onSubmit(form: NgForm) {
    console.log(this.File);
    this.caseService.updateCase(this.File);
    this.router.navigate(["/caseinfo"]);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.caseSub.unsubscribe();
  }
  // onReset(form: NgForm) {
  //   form.onReset()
  // }
}
