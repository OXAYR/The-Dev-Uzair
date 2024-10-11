import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { WorkComponent } from './app/components/work/work.component';
import { AboutMePageComponent } from './app/components/about-me-page/about-me-page.component';
import { ContactsComponent } from './app/components/contacts/contacts.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'about-me', component: AboutMePageComponent },
  { path: 'contacts', component: ContactsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
