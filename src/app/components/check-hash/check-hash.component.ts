import { Component, OnInit } from '@angular/core';
import { ProofService } from '../../service/proof.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'check-hash',
  templateUrl: './check-hash.component.html',
  styleUrls: ['./check-hash.component.css']
})

export class CheckHashComponent implements OnInit {
  hash: string = '';
  hashFound: boolean = false;
  data: Object;
  fakeApiData: any;

  constructor(
    private proofService: ProofService,
    private messageService: MessageService
  ) {}

  getData(): void {
    this.proofService.getData().then(res => this.data = res);
    this.proofService.getFakeDataApi().then(res => this.fakeApiData = res);
  }

  ngOnInit(): void {
    this.getData();
  }

  checkHash() {
    if(this.hash === this.data['hash']) {
      this.hashFound = true;
      this.messageService.clear();
    } else {
      this.hashFound = false;
      this.messageService.add('No proof found with the hash supplied');
    }
  }

  checkInput() {
    console.log('check input')
  }
}