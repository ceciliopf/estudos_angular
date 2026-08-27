import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-funcionario-card',
  styleUrl: './funcionario-card.css',
  templateUrl: './funcionario-card.html',
})
export class FuncionarioCard {
 @Input() funcionario: { id: number, nome: string } = { id: 0, nome: '' };
}
