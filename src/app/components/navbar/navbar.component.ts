import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navRoutes = [
    { name: 'Home', path: '' },
    { name: 'Work', path: 'work' },
    { name: 'About Me', path: 'about-me' },
    { name: 'Contacts', path: 'contacts' },
  ];
}
