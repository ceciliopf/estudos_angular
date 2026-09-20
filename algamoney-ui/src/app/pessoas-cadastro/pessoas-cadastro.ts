import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { RouterModule } from '@angular/router';

@Component({
  imports: [FormsModule, InputTextModule, ButtonModule, InputMaskModule, RouterModule],
  selector: 'app-pessoas-cadastro',
  styleUrl: './pessoas-cadastro.css',
  templateUrl: './pessoas-cadastro.html',
})
export class PessoasCadastro {
}
