import { Routes } from '@angular/router';
import { CommonComponent } from './layouts/common/common.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'movies/:movieId',
        component: MovieDetailsComponent,
      },
    ],
  },
];
