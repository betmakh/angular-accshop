import { Component, OnInit } from '@angular/core';

import {AccountService} from './account.service';

export class Account {
  name: string;
  id: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

  constructor(private accountService: AccountService){}

  selectedAcc: Account;

  ngOnInit(): void {
    this.getAccounts();
  }

  onSelect(account: Account): void {
  	if (this.selectedAcc === account) {
  		this.selectedAcc = null;	
  	} else {
  		this.selectedAcc = account;
  	}
  }

  getAccounts(): void {
    this.accounts = this.accountService.getAccounts();
  }

  accounts : Account[];
  title = 'AccShop';
  acc = 'anus';
}
