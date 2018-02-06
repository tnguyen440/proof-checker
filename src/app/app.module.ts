import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { CheckHashComponent } from './components/check-hash/check-hash.component';
import { CheckInputComponent } from './components/check-input/check-input.component';
import { MessageComponent } from './components/message/message.component';

import { AppRoutingModule } from './routes.module';

import { ProofService } from './service/proof.service';
import { MessageService } from './service/message.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    CheckHashComponent,
    CheckInputComponent,
    MessageComponent
  ],
  providers: [ ProofService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
