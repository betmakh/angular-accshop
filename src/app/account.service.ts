import { Injectable } from '@angular/core';

import {Account} from './account';
import {ACCOUNTS} from './mock-accounts';

@Injectable()
export class AccountService{
	getAccounts(): Promise<Account[]> {
		return new Promise((resolve, reject) => {
			setTimeout(()=> {
				resolve(ACCOUNTS);
			}, 1000)
		})
	};
}