import { Injectable } from '@angular/core';

import {Account} from './account';
import {ACCOUNTS} from './mock-accounts';

@Injectable()
export class AccountService{
	getAccount(id: number) : Promise<Account> {
		return this.getAccounts()
					.then(accs => accs.find(acc => acc.id === id));
	}
	getAccounts(): Promise<Account[]> {
		return new Promise((resolve, reject) => {
			setTimeout(()=> {
				resolve(ACCOUNTS);
			}, 1000)
		})
	};
}