import { Component, Input } from '@angular/core';

@Component({
  selector: 'check-input',
  templateUrl: './check-input.component.html'
})

export class CheckInputComponent {
  @Input() hash: string;
  constructor() {}
}