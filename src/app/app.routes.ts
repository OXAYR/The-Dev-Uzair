import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: '', component: HomeComponent }, // default child route
      { path: 'contacts', component: ContactsComponent }, // contacts route
    ],
  },
];
