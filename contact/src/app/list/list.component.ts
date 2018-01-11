import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	contacts = [];
  constructor(private contactService:ContactService) { }

  getContacts(){
  	this.contactService.LSTGet().subscribe(data =>{
  		this.contacts = data;
  		localStorage.setItem("contacts",JSON.stringify(data));
  	});
  }
  ngOnInit() {
  	  this.getContacts();
  }

}
