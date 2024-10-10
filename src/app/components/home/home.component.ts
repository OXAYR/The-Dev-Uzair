import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
