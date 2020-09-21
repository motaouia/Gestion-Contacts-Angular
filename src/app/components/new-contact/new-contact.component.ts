import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../../models/Contact';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact = new Contact();
  mode : number = 1;
  constructor(private service: ContactsService) { }

  ngOnInit(): void {
  }
  saveContact(){
    this.service.saveContact(this.contact);
    console.log(this.contact);
    this.mode=2;
  }

}
