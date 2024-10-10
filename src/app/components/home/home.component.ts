import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { SkillsCardComponent } from '../skills-card/skills-card.component';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectCardComponent,
    SkillsCardComponent,
    AboutMeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
