import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { CategoriaService } from '../categoria.service';
import { ErrorHandlerService } from '../core/error-handler';
import { PessoaService } from '../pessoa';
import { Categoria, Lancamento, Pessoa } from '../core/model';
import { MessageComponent } from '../message/message';
import { LancamentoService } from '../lancamento';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, TextareaModule, CalendarModule, SelectButtonModule,
    DropdownModule, InputNumberModule, MessageModule, MessageComponent, RouterModule],
  selector: 'app-lancamento-cadastro',
  styleUrl: './lancamento-cadastro.css',
  templateUrl: './lancamento-cadastro.html',
})
export class LancamentoCadastro implements OnInit {
  lancamento = new Lancamento();
  categorias: Categoria[] = [];
  pessoas: Pessoa[] = [];

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  constructor(
    private pessoaService: PessoaService,
    private categoriaService: CategoriaService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private lancamentoService: LancamentoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
    console.log(this.route.snapshot.params['codigo']);
  }

  salvar(form: NgForm) {
    console.log('dados do lancamento', this.lancamento);
  }

  carregarPessoas() {
    return this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas.map((p: any) => ({ label: p.nome, value: p.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarCategorias() {
    return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias.map((c: any) => ({ label: c.nome, value: c.codigo }))
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

