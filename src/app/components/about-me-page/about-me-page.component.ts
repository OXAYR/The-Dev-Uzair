import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.css',
})
export class AboutMePageComponent {}
