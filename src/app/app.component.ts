import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { LogService } from './service/log.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	providers: [ DataService, LogService ]
})
export class AppComponent { 

	items: string[] = [];
	name: string;

	constructor(private dataService: DataService) { }

	addItem(name: string) {
		this.dataService.addData(name);
	}

	ngOnInit() {
		this.items = this.dataService.getData();
	}
}