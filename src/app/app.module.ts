import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AccountDetailComponent } from './account-detail.component';
import { AccountService } from './account.service';
import { AccountsComponent } from './accounts.component';

@NgModule({
    declarations: [
        AppComponent,
        AccountDetailComponent,
        AccountsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([{
            path: 'accounts',
            component: AccountsComponent
        }])
    ],
    providers: [AccountService],
    bootstrap: [AppComponent]
})
export class AppModule {}
