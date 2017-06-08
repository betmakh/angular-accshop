import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { AccountDetailComponent } from './account-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
