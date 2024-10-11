import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsCardComponent } from '../skills-card/skills-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [AboutMeComponent, SkillsCardComponent, CommonModule],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.css',
})
export class AboutMePageComponent {
  funFacts = [
    'I like winter more than summer',
    'I often bike with my friends',
    'I like pizza and pasta',
  ];
}
