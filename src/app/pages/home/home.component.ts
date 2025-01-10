import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-home',
  imports: [MovieListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
