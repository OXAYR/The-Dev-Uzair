import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  repos: any[] = [];

  constructor(private GithubService: GithubService) {}

  ngOnInit() {
    this.GithubService.getRepos().subscribe((data: any[]) => {
      this.repos = data;
    });
  }
}
