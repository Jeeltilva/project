import { Router, ActivatedRoute } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';
import { AuthService } from '../services/auth.service'
import { Component, OnInit } from '@angular/core';
import { CaseService } from '../services/case.service';
import { Client } from '../models/client.model';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  username: String;
  email: String;
  chatroom;
  message: String;
  messageArray: Array<{username: String, message: String}> = [];
  isTyping = false;
  clientData:Client;

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
    this.clientData = this.caseService.returnClient();
    const currentUser = this.authService.getUserId();
    this.username = this.authService.getuserName();
    this.chatroom = currentUser + this.clientData.userId

    this.webSocketService.joinRoom({lawyer: currentUser, room: this.chatroom, client: this.clientData.userId});
    this.authService.getChatRoomsChat(this.chatroom).subscribe(messages => {
      this.messageArray = messages;
    }); 
  }

  sendMessage() {
    this.webSocketService.sendMessage({room: this.chatroom, user: this.username, message: this.message});
    this.message = '';
  }

  typing() {
    this.webSocketService.typing({room: this.chatroom, user: this.username});
  }
}
