import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { CheckHashComponent } from './components/check-hash.component';
import { CheckInputComponent } from './components/check-input.component';
import { MessageComponent } from './components/message.component';

const ROUTES = [
  {
    path: 'check-hash',
    component: CheckHashComponent
  },
  {
    path: 'check-input',
    component: CheckInputComponent
  }
];



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ 
    AppComponent,
    CheckHashComponent,
    CheckInputComponent,
    MessageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
