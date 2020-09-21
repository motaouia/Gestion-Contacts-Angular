import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ContactsService } from '../../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact = {
    nom: 'med',
    emailContact: 'med.medo@gmail.com'
  }
  page:number=0;
  size:number=5;
  motCleVar:string = null;
  pageContacts:any ;
  pages:Array<number>;
  currentPage:number=0;



  constructor(private service: ContactsService,
    private router : Router) { }

  ngOnInit(): void {
    this.chercher();
    /*this.service.getContacts().subscribe(data => {
          this.pageContacts = this.service.pageContacts;
          console.log(this.pageContacts);
    
    });
    console.log(this.service.pageContacts);*/
          
}

chercher():any{
  /*this.service.getContacts(mc,this.page,this.size).subscribe(data => {
    this.pageContacts = this.service.pageContacts;
    this.pages = new Array(this.service.pageContacts.totalPages)
    console.log(this.pageContacts);

});
console.log(this.service.pageContacts);*/

  this.doSearch(this.motCleVar,this.page,this.size);
}

doSearch(mcParam:string, pageParam:number, sizeParam: number){
  this.service.getContacts(this.motCleVar,this.page,this.size).subscribe(data => {
    this.pageContacts = this.service.pageContacts;
    this.pages = new Array(this.service.pageContacts.totalPages)
    console.log(this.pageContacts);

});
console.log(this.service.pageContacts);
}

goToPage(i:number){
  this.page = i;
  this.doSearch(this.motCleVar,this.page,this.size);
}
onEditContact(id:number){
  this.router.navigate(['edit-contact', id]);

}
onDeleteContact(id:number){
 //this.service.deleteContact(id).subscribe(data => {}, err =>{})

}
}
