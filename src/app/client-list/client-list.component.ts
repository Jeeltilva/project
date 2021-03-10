import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  data:Client[] = []
  constructor(private caseService: CaseService) { }

  displayedColumns: string[] = ['Name', 'Email', 'Contact No', 'Action'];

  ngOnInit(): void {
    this.caseService.getClientList().subscribe((data:Client[]) => {
      this.data = data
    })
  }
}
