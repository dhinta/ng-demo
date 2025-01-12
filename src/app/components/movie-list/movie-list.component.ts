import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Movie } from '../../models/movie';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-movie-list',
  imports: [CardComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies = input<Movie[]>([]);
}
