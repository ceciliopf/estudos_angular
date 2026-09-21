import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { Pessoa } from '../core/model';
import { PessoaService } from '../pessoa';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler';

@Component({
  imports: [FormsModule, InputTextModule, ButtonModule, InputMaskModule],
  selector: 'app-pessoas-cadastro',
  styleUrl: './pessoas-cadastro.css',
  templateUrl: './pessoas-cadastro.html',
})
export class PessoasCadastro {
  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService
  ) { }

  salvar(form: NgForm) {
    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });
        form.reset();
        this.pessoa = new Pessoa();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
