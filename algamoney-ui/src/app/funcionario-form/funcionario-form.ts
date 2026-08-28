import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-funcionario-form',
  styleUrl: './funcionario-form.css',
  templateUrl: './funcionario-form.html',
})
export class FuncionarioForm {
  ultimoId = 0;
  nome = 'Thiago';
  adicionado = false;
  @Output() funcionarioAdicionado = new EventEmitter();

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;

    const funcionario ={
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario)
  }
}
