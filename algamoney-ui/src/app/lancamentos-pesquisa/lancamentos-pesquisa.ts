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
import { TableLazyLoadEvent } from 'primeng/table';



@Component({
  imports: [RouterOutlet, TabViewModule, InputTextModule, TableModule, ButtonDirective, CommonModule, TagModule, TooltipModule
  , FormsModule, CalendarModule],
  selector: 'app-lancamentos-pesquisa',
  styleUrl: './lancamentos-pesquisa.css',
  templateUrl: './lancamentos-pesquisa.html',
})
export class LancamentosPesquisa implements OnInit {

  filtro = new LancamentoFiltro();

  totalRegistros = 0;
  lancamentos: any[] = [];
  constructor(
    private lancamentoService: Lancamento,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
   // this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.lancamentos = resultado.lancamentos;
        this.totalRegistros = resultado.total;
        this.cdr.detectChanges();
      });
  }

  aoMudarPagina(event: TableLazyLoadEvent) {
    const pagina = event.first! / event.rows!;
    this.pesquisar(pagina);
  }

}
