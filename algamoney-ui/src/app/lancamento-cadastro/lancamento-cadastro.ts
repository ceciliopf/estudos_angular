import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { MessageComponent } from '../message/message';
import { CategoriaService } from '../categoria.service';
import { ErrorHandlerService } from '../core/error-handler';

@Component({
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, TextareaModule, CalendarModule, SelectButtonModule, DropdownModule, InputNumberModule, MessageModule, MessageComponent],
  selector: 'app-lancamento-cadastro',
  styleUrl: './lancamento-cadastro.css',
  templateUrl: './lancamento-cadastro.html',
})
export class LancamentoCadastro implements OnInit {
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];
  
  constructor ( 
    private categoriaService: CategoriaService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.carregarCategorias();
  }

  categorias: any[] = [];
  
  pessoas: any[] = [];
  
  carregarCategorias(){
    return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias.map((c: any) => ({label: c.nome, value: c.codigo}))
        })
    .catch(erro => this.errorHandler.handle(erro));
  }

  lancamento = {
    tipo: 'RECEITA',
    dataVencimento: new Date(),
    dataPagamento: new Date(),
    valor: 0,
    descricao: '',
    categoria: null,
    pessoa: ''
  }

 }

