import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpMessagerie';


  userList: string[] = [];

  senderUser: string = '';
  messageSent: string = '';


  msgList: Msg[] = [];

  sendMsg(): void {

    if(this.senderUser == "" || this.messageSent == "") {
      return;
    }

    if(this.msgList.find((msg) => msg.user == this.senderUser) == undefined) {
      
      this.userList.push(this.senderUser);
    }

    this.msgList.push(new Msg(this.senderUser, this.messageSent));
  }
}

class Msg{

  constructor(
    public user: string,
    public message: string,
    public date: Date = new Date()
  ) { }
}
