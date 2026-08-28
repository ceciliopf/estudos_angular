import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FuncionarioCard } from './funcionario-card/funcionario-card';
import { FuncionarioForm } from './funcionario-form/funcionario-form';

@Component({
  imports: [RouterOutlet, FormsModule, CommonModule, FuncionarioCard, FuncionarioForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   funcionarios: { id: number, nome: string }[] = [];

   aoAdicionar(){
    
   }
}

