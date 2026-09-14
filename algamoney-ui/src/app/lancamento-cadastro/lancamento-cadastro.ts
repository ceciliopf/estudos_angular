import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';

@Component({
  imports: [ InputTextModule, ButtonModule, TextareaModule ],
  selector: 'app-lancamento-cadastro',
  styleUrl: './lancamento-cadastro.css',
  templateUrl: './lancamento-cadastro.html',
})
export class LancamentoCadastro {}
