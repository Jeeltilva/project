import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client.model';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  clientData : Client[] = [];
  displayedColumns: string[] = ['Name', 'Action'];

  constructor(private caseService : CaseService, private router: Router) { }

  ngOnInit(): void {
    this.caseService.getExistingChats().subscribe(data =>{
      this.clientData = data;
      console.log(this.clientData);
    })
  }

  onChat(data: Client){
    this.caseService.storeClientForChat(data);
    this.router.navigate(['/chatroom']);
  }

}
