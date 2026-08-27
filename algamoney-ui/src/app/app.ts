import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BemVindo } from './bem-vindo/bem-vindo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterOutlet, BemVindo, FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  ultimoId = 0;
  nome = 'Thiago';
  adicionado = false;
  funcionarios: { id: number, nome: string }[] = [];

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;

    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome

    });
  }

}
