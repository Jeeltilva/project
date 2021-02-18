import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Case } from "../models/case.model";
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss']
})
export class TryComponent implements OnInit {

  private Sub:Subscription;
  File:Case;
  private id:string;
  constructor(private caseService: CaseService) { }

  ngOnInit(): void {
    this.id = this.caseService.getId();
    this.caseService.getCaseData(this.id);
    this.caseService.getsingleCaseUpdateListener().subscribe((data:Case) => {
      this.File = data;
    })
  }

  onClick() {
    console.log(this.File);
  }
}
