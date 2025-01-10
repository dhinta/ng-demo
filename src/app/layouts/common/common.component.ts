import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-common',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss',
})
export class CommonComponent {}
