import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [ FormsModule, InputTextModule, ButtonModule ],
  selector: 'app-pessoas-cadastro',
  styleUrl: './pessoas-cadastro.css',
  templateUrl: './pessoas-cadastro.html',
})
export class PessoasCadastro {
}
