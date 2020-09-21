import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../../models/Contact';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  pageContacts:any ;
  contact: any;

  constructor(private httpClient: HttpClient) { }

  getContacts(mc:string, page:number, size:number){
    return this.httpClient.get("http://localhost:8080/chercherContacts?mc=" + mc+"&page="+page+"&size="+size).
   pipe(map(response => {
                          console.log(response);
                          this.pageContacts = response
                         //response.json();
                        }
            )
        );
  }

  saveContact(contact:Contact){

    return this.httpClient.post('http://127.0.0.1:8080/contacts/',contact).
    subscribe(data => 
    {
       console.log(data);
    }, err => {
      console.log(err);
    });
    
  }


  getContactById(idContact : number){
    console.log('Inside Conyacts.Service ==> ' + idContact);
    return this.httpClient.get("http://localhost:8080/contacts/"+idContact).
    pipe(map((response : any) => {
      console.log(response);
      console.log("@@@@@@@@======");
      this.contact = response;
                         }
             )
         );;
  }

  deleteContact(idContact:number){
    this.httpClient.delete("http://localhost:8080/contacts/"+idContact).pipe(map(data => console.log(data)) );
  }

}
