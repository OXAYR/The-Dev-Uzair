import { Component } from '@angular/core';
import { ContactusComponent } from '../contactus/contactus.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactusComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {}
