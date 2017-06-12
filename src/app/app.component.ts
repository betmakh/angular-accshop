import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'accshop-app',
	template: `    <h1>
	    Root component title: {{title}}!!
	  </h1>
	  <a routerLink="/accounts">Accounts</a>
	  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'AccShop';
}