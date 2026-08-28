import { Component, Input } from '@angular/core';

@Component({
  imports: [],
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
}
