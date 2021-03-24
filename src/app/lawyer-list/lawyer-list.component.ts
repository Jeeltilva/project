import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LawyerInt } from '../models/lawyer.model copy';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-lawyer-list',
  templateUrl: './lawyer-list.component.html',
  styleUrls: ['./lawyer-list.component.scss','../chats/chats.component.scss']
})
export class LawyerListComponent implements OnInit {

  data:LawyerInt[] = []
  constructor(private caseService: CaseService, private router: Router) { }

  displayedColumns: string[] = ['Name', 'Email', 'Contact No', 'Action'];

  ngOnInit(): void {
    this.caseService.getLawyerList().subscribe((data:LawyerInt[]) => {
      this.data = data
    })
  }

  onMessage(data: LawyerInt){
    this.caseService.storeLawyerForChat(data);
    this.router.navigate(['/clientChatroom']);
  }
}
