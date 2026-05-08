import { Component } from '@angular/core';
import { CurrentRate } from './components/current-rate/current-rate';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CurrentRate],
})
export class App {}
