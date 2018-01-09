import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  onSubmit(contact:any){
  	this.contactService.addContact(contact).subscribe(function(data){
  		console.log('add');
  	})
  }
  ngOnInit() {

  }

}
