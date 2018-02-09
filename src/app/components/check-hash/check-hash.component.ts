import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  proofDetails: any;
  data: any;
  fakeApiData: any;

  constructor(
    private router: Router,
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
    this.proofDetails = this.data.find((item: any) => item.hash === this.hash);

    if (this.proofDetails) {
      this.hashFound = true;
      this.messageService.clear();
    } else {
      this.hashFound = false;
      this.messageService.add('No proof found with the hash supplied');
    }
  }

  checkInput() {
    // console.log('hash', this.hash)
    if(this.hash && this.hashFound == true) {
      this.router.navigate(['/check-input', this.hash]);
    }
  }
}