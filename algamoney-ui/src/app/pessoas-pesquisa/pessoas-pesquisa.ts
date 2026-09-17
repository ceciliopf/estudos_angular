import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonDirective } from 'primeng/button';
import { TableModule, TableLazyLoadEvent } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { PessoaService, PessoaFiltro } from '../pessoa';

@Component({
  imports: [RouterOutlet, TabViewModule, InputTextModule, TableModule, ButtonDirective, CommonModule, TagModule, TooltipModule, FormsModule],
  selector: 'app-pessoas-pesquisa',
  styleUrl: './pessoas-pesquisa.css',
  templateUrl: './pessoas-pesquisa.html',
})
export class PessoasPesquisa implements OnInit {
  filtro = new PessoaFiltro();
  totalRegistros = 0;
  pessoas: any[] = [];

  constructor(
    private pessoaService: PessoaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
        this.pessoas = resultado.pessoas;
        this.totalRegistros = resultado.total;
        this.cdr.detectChanges();
      });
  }

  aoMudarPagina(event: TableLazyLoadEvent) {
    const pagina = event.first! / event.rows!;
    this.pesquisar(pagina);
  }
}
