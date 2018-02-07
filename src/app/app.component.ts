import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="my-app">
    <h1><em>{{title}}</em></h1>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent  { 
  title = 'DIP Proof Checker';
}
