import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonDirective } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
@Component({
  imports: [RouterOutlet, TabViewModule, InputTextModule, TableModule, ButtonDirective, CommonModule, TagModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  lancamentos = [
    {
      tipo: 'DESPESA',
      descricao: 'Compra de pão',
      dataVencimento: '30/06/2017',
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Venda de software',
      dataVencimento: '10/06/2017',
      dataPagamento: '09/06/2017',
      valor: 80000,
      pessoa: 'Atacado Brasil',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Impostos',
      dataVencimento: '20/07/2017',
      dataPagamento: null,
      valor: 14312,
      pessoa: 'Ministério da Fazenda',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Mensalidade de escola',
      dataVencimento: '05/06/2017',
      dataPagamento: '30/05/2017',
      valor: 800,
      pessoa: 'Escola Abelha Rainha',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Venda de carro',
      dataVencimento: '18/08/2017',
      dataPagamento: null,
      valor: 55000,
      pessoa: 'Sebastião Souza',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Aluguel',
      dataVencimento: '10/07/2017',
      dataPagamento: '09/07/2017',
      valor: 1750,
      pessoa: 'Casa Nova Imóveis',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Mensalidade musculação',
      dataVencimento: '13/07/2017',
      dataPagamento: null,
      valor: 180,
      pessoa: 'Academia Top',
    },
  ];
}
