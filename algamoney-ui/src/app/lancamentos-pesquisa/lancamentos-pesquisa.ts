import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonDirective } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { Lancamento, LancamentoFiltro } from '../lancamento';
import { CalendarModule } from 'primeng/calendar';



@Component({
  imports: [RouterOutlet, TabViewModule, InputTextModule, TableModule, ButtonDirective, CommonModule, TagModule, TooltipModule
  , FormsModule, CalendarModule],
  selector: 'app-lancamentos-pesquisa',
  styleUrl: './lancamentos-pesquisa.css',
  templateUrl: './lancamentos-pesquisa.html',
})
export class LancamentosPesquisa implements OnInit {
  descricao = '';
  dataVencimentoInicio!: Date;
  dataVencimentoFim!: Date;

  lancamentos: any[] = [];
  constructor(
    private lancamentoService: Lancamento,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    const filtro = {} as LancamentoFiltro;

    if (this.descricao) {
      filtro.descricao = this.descricao;
    }
    if (this.dataVencimentoInicio) {
      filtro.dataVencimentoInicio = this.dataVencimentoInicio;
    }
    if (this.dataVencimentoFim) {
      filtro.dataVencimentoFim = this.dataVencimentoFim;
    }

    this.lancamentoService.pesquisar(filtro)
      .then(lancamentos => {
        this.lancamentos = lancamentos;
        this.cdr.detectChanges();
      });
  }

}
