import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BemVindo } from './bem-vindo/bem-vindo';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, BemVindo, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nome = 'Thiago';

  adicionar(){
    console.log(`Adicionando ${this.nome}`);
  }

}
