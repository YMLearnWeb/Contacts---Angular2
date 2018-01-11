import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Contact } from './contact';

const CONTACT_URL ='assets/contacts.json';
@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  handleErr(error:any){
    alert(error);
  }
  //request
  request(url:string,opts:any){
    //this.showLoading();
  	return this.http.request(url,new RequestOptions(opts))
  					.map(res=>res.json())
            // .do(this.hideLoading())
            .catch(this.handleErr.bind(this));
  }
  //get
  get(url:string,reqOpts?: RequestOptions):Observable<any>{
  	return this.request(url,reqOpts);
  }
  getContact():Observable<any>{
  	return this.get(CONTACT_URL);
  }
  //post
  addContact(contact:Contact):Observable<any>{
      let body = JSON.stringify(contact);
      let header = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({headers:header});
      return this.http.post(CONTACT_URL,body,options).map(res=>res.json());
  }
  //put


  //delete

  //localstorage
   LSTGet():Observable<any>{
     if(localStorage.getItem("contacts")){       
       return new Observable(observer =>{
             //get items from localstorage
                observer.next(JSON.parse(localStorage.getItem("contacts")));
                observer.complete();
           });
     }else{
       return this.get(CONTACT_URL);
     } 
   }
  

  //add to localstorage
  addContacttoLocalStorage(contact:Contact):void{
    let contacts = localStorage.getItem("contacts");
    let _contacts = JSON.parse(contacts);
    _contacts[contact.id - 1] = contact;

    localStorage.setItem("contacts",JSON.stringify(_contacts));
  }
  
}
