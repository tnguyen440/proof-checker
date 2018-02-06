import { Component } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html'
})
export class MessageComponent {
  
  constructor(public messageService: MessageService) { }
  // clearMessage() {
  //   this.messageService.clear();
  // }
}