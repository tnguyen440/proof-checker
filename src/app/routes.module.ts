import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckHashComponent } from './components/check-hash/check-hash.component';
import { CheckInputComponent } from './components/check-input/check-input.component';
import { MessageComponent } from './components/message/message.component';

const routes: Routes = [
  { path: '', redirectTo: '/check-hash', pathMatch: 'full' },
  { path: 'check-hash', component: CheckHashComponent },
  { path: 'check-input', component: CheckInputComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}