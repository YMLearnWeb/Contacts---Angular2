import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
}
