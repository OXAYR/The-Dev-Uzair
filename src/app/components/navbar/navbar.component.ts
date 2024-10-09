import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navRoutes: Array<{ name: string; path: string }> = [
    { name: 'Home', path: '/home' },
    { name: 'Work', path: '/work' },
    { name: 'About Me', path: '/about-me' },
    { name: 'Contacts', path: '/contacts' },
  ];
}
