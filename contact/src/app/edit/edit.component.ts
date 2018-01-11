import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  contacts;
  avator;
  id:number;
  name:string = "";
  tel:string = "";
  addType:boolean;
  constructor(private contactService: ContactService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  getContacts(){
  	this.contactService.LSTGet().subscribe(data => {
  		this.contacts = data;
  		localStorage.setItem("contacts",JSON.stringify(data));
  		this.getById();
  	});
  }

  onChange(event){
  	this.avator = event.srcElement.files[0].name;
  }

  onSubmit(contact:any){
  	// this.contactService.addContact(contact).subscribe(function(data){
  	// 	console.log('add');
  	// })
  	contact.avator = this.avator;
  	if(this.addType){
  		contact.id = this.contacts.length + 1;
  	}else{
  		 //edit
  		contact.id = this.id + 1;
  	}
  	
  	this.contactService.addContacttoLocalStorage(contact);
  	this._router.navigate(['/list']);
  }

  //add or edit 
  addOrEdit(){
  	this.id = this._activatedRoute.snapshot.params['id'] - 1;
  	if(this.id === 0 || this.id >0){
  		this.addType = false;
  	}else{
  		this.addType = true;
  	}
  }

  //data initialize 
  getById(){
  		if(!this.addType){
  		this.avator = this.contacts[this.id].avator||"";
  		this.name = this.contacts[this.id].name||"";
  		this.tel = this.contacts[this.id].tel||"";
  	}
  }

  delContact(){
  	// delete this.contacts[this.id];
  	this.contacts.splice(this.id,1);
  	localStorage.setItem("contacts",JSON.stringify(this.contacts));
  }

  ngOnInit() {
  	this.addOrEdit();
  	this.getContacts();	
  }
}
