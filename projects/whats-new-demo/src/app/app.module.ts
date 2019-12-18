import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WhatsNewModule } from 'whats-new';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WhatsNewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
