import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { HomeServices } from './home.service';

@Component({
  selector: 'app-home',
  imports: [MovieListComponent, CommonModule],
  providers: [HomeServices],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  service = inject(HomeServices);

  movies = this.service.movies;

  log = effect(() => console.log(this.movies(), this.service.page()));

  onPageChange(newPage: number): void {
    this.service.page.set(newPage);
  }

  onLimitChange(newLimit: number): void {
    this.service.limit.set(newLimit);
  }
}
