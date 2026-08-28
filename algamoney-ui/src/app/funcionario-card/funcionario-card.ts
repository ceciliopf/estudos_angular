import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-funcionario-card',
  // styleUrl: './funcionario-card.css',
  templateUrl: './funcionario-card.html',
  styles: [`
      .card-body{
        text-transform: uppercase;
        color:blue;
      }
    `]
})
export class FuncionarioCard {
  @Input() funcionario: { id: number, nome: string } = { id: 0, nome: '' };

  getEstilosCartao(){
  return {

     'border-width.px' : this.funcionario.id,
     backgroundColor: this.funcionario.id % 2 === 0 
     ? 'lightblue' : 'violet'
  };
}
}
