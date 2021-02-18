import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Addcase } from "../models/addcase.model";
import { CaseService } from "../services/case.service";

@Component({
  selector: 'app-addcase',
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.scss']
})
export class AddcaseComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private caseService: CaseService, private router: Router) { }

  ngOnInit(): void {
  }
  @ViewChild('addcase') form:NgForm;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  onSubmit(form: NgForm) {
    const value = this.form.value;
    console.log(value);
    const Case = new Addcase(value.stampNo, value.fillingDate, value.status, value.bench, value.petitioner, value.respondent,value.forum, value.district,value.postalCode, value.act, value.RegNo, value.RegDate, value.stage, value.description);
    this.caseService.addCase(Case);
    this.router.navigate(["/caseinfo"]);
  }

  // onReset(form: NgForm) {
  //   form.onReset()
  // }
}
