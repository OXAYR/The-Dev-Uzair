import { GithubService } from './../../services/github.service';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { SkillsCardComponent } from '../skills-card/skills-card.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectCardComponent,
    SkillsCardComponent,
    AboutMeComponent,
    ContactusComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  repos: any[] = [];

  constructor(private GithubService: GithubService, private router: Router) {}

  navigateToContacts(route: string) {
    this.router.navigate([route]);
  }
  ngOnInit() {
    this.GithubService.getRepos().subscribe((data: any[]) => {
      this.repos = data?.reverse();
    });
  }
}
