import { Component, OnInit } from '@angular/core';

import {AccountService} from './account.service';

export class Account {
  name: string;
  id: number;
}


@Component({
  selector: 'accs-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AccountsComponent implements OnInit {

  constructor(private accountService: AccountService){}

  selectedAcc: Account;

  ngOnInit(): void {
    console.log("init start",this.getAccounts());
  }

  onSelect(account: Account): void {
  	if (this.selectedAcc === account) {
  		this.selectedAcc = null;	
  	} else {
  		this.selectedAcc = account;
  	}
  }

  getAccounts(): void {
    this.accountService.getAccounts().then(accounts => { 
      this.accounts = accounts
      console.log("get finished");
    });
  }

  accounts : Account[];
  title = 'AccShop';
  acc = 'anus';
}
