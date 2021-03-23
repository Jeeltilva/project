import { Router, ActivatedRoute } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';
import { AuthService } from '../services/auth.service'
import { Component, OnInit } from '@angular/core';
import { CaseService } from '../services/case.service';
import { Client } from '../models/client.model';
import { Lawyer } from '../models/lawyer.model';
import { LawyerInt } from '../models/lawyer.model copy';


@Component({
  selector: 'app-client-chatroom',
  templateUrl: './client-chatroom.component.html',
  styleUrls: ['./client-chatroom.component.scss']
})
export class ClientChatroomComponent implements OnInit {

  username: String;
  email: String;
  chatroom;
  message: String = '';
  messageArray: Array<{username: String, message: String}> = [];
  isTyping = false;
  lawyerData:LawyerInt;

  constructor(private route: ActivatedRoute,
    private webSocketService: WebsocketService,
    private authService: AuthService,
    private caseService: CaseService) {
      this.webSocketService.newMessageReceived().subscribe(data => {
        this.messageArray.push(data);
        this.isTyping = false;
      });
      this.webSocketService.receivedTyping().subscribe(bool => {
        this.isTyping = bool.isTyping;
      });
     }

  ngOnInit(): void {
    this.lawyerData = this.caseService.returnLawyer();
    const currentUser = this.authService.getUserId();
    this.username = this.authService.getuserName();
    this.chatroom = this.lawyerData.userId + currentUser

    this.webSocketService.joinRoom({lawyer: this.lawyerData.userId, room: this.chatroom, client: currentUser});
    this.authService.getChatRoomsChat(this.chatroom).subscribe(messages => {
      this.messageArray = messages;
    });
  }

  sendMessage() {
    if(this.message.trim()== ''){
      return;
    }
    this.webSocketService.sendMessage({room: this.chatroom, user: this.username, message: this.message});
    this.message = '';
  }

  typing() {
    this.webSocketService.typing({room: this.chatroom, user: this.username});
  }
}
