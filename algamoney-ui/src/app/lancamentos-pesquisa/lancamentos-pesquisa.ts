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
import { LancamentoService, LancamentoFiltro } from '../lancamento';
import { CalendarModule } from 'primeng/calendar';
import { TableLazyLoadEvent } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler';




@Component({
  imports: [RouterOutlet, TabViewModule, InputTextModule, TableModule, ButtonDirective, CommonModule, TagModule, TooltipModule
    , FormsModule, CalendarModule, ToastModule, ConfirmDialogModule],
  selector: 'app-lancamentos-pesquisa',
  styleUrl: './lancamentos-pesquisa.css',
  templateUrl: './lancamentos-pesquisa.html',
})
export class LancamentosPesquisa implements OnInit {

  filtro = new LancamentoFiltro();

  totalRegistros = 0;
  lancamentos: any[] = [];
  constructor(
    private lancamentoService: LancamentoService,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService
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
      })
      .catch(erro=> this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: TableLazyLoadEvent) {
    const pagina = event.first! / event.rows!;
    this.pesquisar(pagina);
  }

  excluir(lancamento: any) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja excluir este Lançamento?",
      accept: () => {
        this.lancamentoService.excluir(lancamento.codigo)
          .then(() => {
            this.pesquisar(this.filtro.pagina);
            this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Lançamento excluído com sucesso!' });
          })
          .catch(erro=> this.errorHandler.handle(erro));
      }
    })

  }

}
