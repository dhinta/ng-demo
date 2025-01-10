import { Component } from '@angular/core';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-movie-list',
  imports: [CardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {}
