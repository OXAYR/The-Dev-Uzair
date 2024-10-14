import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.css',
})
export class SkillsCardComponent {
  skillset = [
    { heading: 'Language', text: 'typescript Javascript Python ' },
    {
      heading: 'Database',
      text: 'MY-SQL Mongo Firebase',
    },
    {
      heading: 'Tools',
      text: 'VSCode Git Figma',
    },
    {
      heading: 'Other',
      text: 'HTML CSS REST Scrapping Wordpress Wordpress Headless',
    },
    {
      heading: 'Frameworks',
      text: 'Angular React Vue Node Express React Native Next',
    },
  ];
}
