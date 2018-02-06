import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1><em>{{title}}</em></h1>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
  title = 'DIP Proof Checker';
}
