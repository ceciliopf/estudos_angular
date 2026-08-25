import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BemVindo } from './bem-vindo/bem-vindo';

@Component({
  imports: [RouterOutlet, BemVindo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nome = 'Thiago';
}
