import { Component } from '@angular/core';

export class Account {
  name: string;
  id: number;
}

const accs: Account[] = [{
	name: '1st acc',
	id: 1
},{
	name: '2st acc',
	id: 2
},{
	name: '3st acc',
	id: 3
},{
	name: '4st acc',
	id: 4
},{
	name: '5st acc',
	id: 5
}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedAcc: Account;

  onSelect(account: Account): void {
  	if (this.selectedAcc === account) {
  		this.selectedAcc = null;	
  	} else {
  		this.selectedAcc = account;
  	}
  }

  accounts = accs;
  title = 'AccShop';
  acc = 'anus';
}
