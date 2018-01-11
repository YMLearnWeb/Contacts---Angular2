import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Contact } from '../shared/contact';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id;name;tel;avator;
  constructor(private _activatedRoute: ActivatedRoute, private contactService: ContactService) { }

 getContact(id){
  	if(localStorage.getItem("contacts")){
  		let contacts = JSON.parse(localStorage.contacts);
  		this.name = contacts[id].name;
  		this.tel = contacts[id].tel;
  		this.avator = contacts[id].avator;
  	}else{
  		this.contactService.getContact().subscribe(data =>{
  			let contacts = data;
  			this.avator = contacts[id].avator;
  			 this.name = contacts[id].name;
  			this.tel = contacts[id].tel;
  		});
  		}
  }

  ngOnInit() {
  	this.id = this._activatedRoute.snapshot.params['id'] - 1;
  	this.getContact(this.id);
  }

}
