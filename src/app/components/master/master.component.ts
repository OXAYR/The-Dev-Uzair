import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {}
