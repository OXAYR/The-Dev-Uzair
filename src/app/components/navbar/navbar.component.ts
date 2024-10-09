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
  navRoutes: Array<{ name: string; path: string }> = [
    { name: 'home', path: '/home' },
    { name: 'work', path: '/work' },
    { name: 'about-me', path: '/about-me' },
    { name: 'contacts', path: '/contacts' },
  ];
}
