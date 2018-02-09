import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import  { sha256 }  from 'js-sha256';
import { ProofService } from '../../service/proof.service';


@Component({
  selector: 'check-input',
  templateUrl: './check-input.component.html',
  styleUrls: ['./check-input.component.css']
})

export class CheckInputComponent implements OnInit {
  inputHash: string;

  inputSource: string;

  hashedSource: string;

  isMatched: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private proofService: ProofService
  ) {}
  
  ngOnInit(): void {
    this.inputHash = this.router.snapshot.params['hash'];
  }

  checkInput(source: string) {
    this.hashedSource = sha256(this.inputSource);
    // console.log(hashedSource)
    if (this.inputHash === this.hashedSource) {
      this.isMatched = true;
    } else {
      this.isMatched = false;
    }

  }
}