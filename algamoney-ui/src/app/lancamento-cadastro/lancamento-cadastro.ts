import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TextareaModule } from 'primeng/textarea';
import { CategoriaService } from '../categoria.service';
import { ErrorHandlerService } from '../core/error-handler';
import { Categoria, Lancamento, Pessoa } from '../core/model';
import { LancamentoService } from '../lancamento';
import { MessageComponent } from '../message/message';
import { PessoaService } from '../pessoa';

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
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
    const codigoLancamento =this.route.snapshot.params['codigo'];

    if (codigoLancamento) {
      this.carregarLancamento(codigoLancamento);
    }
  }

  get titulo(): string {
    return this.lancamento.codigo ? 'Edição de Lançamento' : 'Novo Lançamento';
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

  carregarLancamento(codigo: number) {
    return this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = {
          ...lancamento,
          categoria: lancamento.categoria || new Categoria(),
          pessoa: lancamento.pessoa || new Pessoa()
        };
        this.cdr.detectChanges();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

