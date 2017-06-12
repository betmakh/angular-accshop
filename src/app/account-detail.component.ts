import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {AccountService} from './account.service';
import {Account} from './account';

@Component({
    selector: 'acc-detail',
    template: `
		<div *ngIf="account">
	      <h2>{{account.name}} details!</h2>
	      <div><label>id: </label>{{account.id}}</div>
	      <div>
	        <label>name: </label>
	        <input [(ngModel)]="account.name" placeholder="name"/>
	      </div>
	    </div>`
})
export class AccountDetailComponent implements OnInit {
	@Input() account: Account;

	ngOnInit() :void {
		this.route.params
			.switchMap((params: Params) => this.accountService.getAccount(params.id))
			.subscribe(account => this.account = account);
	}

	constructor(
		private accountService: AccountService,
		private route: ActivatedRoute,
		private location: Location){}
}
