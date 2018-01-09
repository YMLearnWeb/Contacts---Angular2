import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	contacts = {};
  constructor(private _ContactService:ContactService) { }

  ngOnInit() {
  	this._ContactService.getContact().subscribe(data=>
  		this.contacts = data);
  }

}
