import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { DataSet } from '../../models/common';
import { Movie } from '../../models/movie';
import { PaginationComponent } from '../pagination/pagination.component';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-movie-list',
  imports: [CardComponent, CommonModule, PaginationComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies = input<DataSet<Movie>>({
    data: [] as Movie[],
    pagination: { page: 1, limit: 10, total: 0 },
  });

  readonly pageChange = output<number>();
  readonly limitChange = output<number>();

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  onLimitChange(limit: number) {
    this.limitChange.emit(limit);
  }
}
