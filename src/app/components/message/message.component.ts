import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  
  constructor(public messageService: MessageService) { }
  // clearMessage() {
  //   this.messageService.clear();
  // }
}