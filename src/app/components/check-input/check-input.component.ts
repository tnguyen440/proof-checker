import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'check-input',
  templateUrl: './check-input.component.html',
  styleUrls: ['./check-input.component.css']
})

export class CheckInputComponent implements OnInit {
  @Input() hash: string;
  constructor() {}
  
  ngOnInit(): void {}
}