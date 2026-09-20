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
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterOutlet, TabViewModule, InputTextModule, TableModule, ButtonDirective, CommonModule, TagModule, TooltipModule, FormsModule, ToastModule, ConfirmDialogModule, RouterModule],
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
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService
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
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: TableLazyLoadEvent) {
    const pagina = event.first! / event.rows!;
    this.pesquisar(pagina);
  }

  excluir(pessoa: any) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja excluir esta Pessoa?",
      accept: () => {
        this.pessoaService.excluir(pessoa.codigo)
          .then(() => {
            this.pesquisar(this.filtro.pagina);
            this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Pessoa excluída com sucesso!' });
          })
          .catch(erro => this.errorHandler.handle(erro));
      }
    });
  }

  alternarStatus(pessoa: any) {
    const novoStatus = !pessoa.ativo;

    this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';
        pessoa.ativo = novoStatus;
        this.messageService.add({ severity: 'success', detail: `Pessoa ${acao} com sucesso!` });
        this.cdr.detectChanges();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
