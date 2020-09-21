import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../../models/Contact';
import { ContactsService } from '../../services/contacts.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:Contact;
  mode : number = 1;
  idContact:number=null;

  constructor(private activateRoute:ActivatedRoute,
    private contactService: ContactsService) { 
      this.idContact = this.activateRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.contact = this.contactService.contact;
    console.log(this.contact);
    
  }

  updateContact(){
   // this.service.saveContact(this.contact);
    console.log(this.contact);
    this.mode=2;
  }

}
