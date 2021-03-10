import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LawyerInt } from '../models/lawyer.model copy';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-clientside-chat',
  templateUrl: './clientside-chat.component.html',
  styleUrls: ['./clientside-chat.component.scss']
})
export class ClientsideChatComponent implements OnInit {

  lawyerData : LawyerInt[] = [];
  displayedColumns: string[] = ['Name', 'Action'];

  constructor(private caseService: CaseService, private router: Router) { }

  ngOnInit(): void {
    this.caseService.getExistingLawyerChat().subscribe(data=>{
      this.lawyerData = data;
      console.log(this.lawyerData);
    })
  }

  onChat(data : LawyerInt){
    this.caseService.storeLawyerForChat(data);
    this.router.navigate(['/clientChatroom']);
  }

}
