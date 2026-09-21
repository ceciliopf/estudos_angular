import { Component } from '@angular/core';
import { LancamentosPesquisa } from './lancamentos-pesquisa/lancamentos-pesquisa';
import { PessoasPesquisa } from './pessoas-pesquisa/pessoas-pesquisa';
import { Navbar } from './navbar/navbar';
import { LancamentoCadastro } from './lancamento-cadastro/lancamento-cadastro';
import { PessoasCadastro } from './pessoas-cadastro/pessoas-cadastro';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ToastModule } from 'primeng/toast';

registerLocaleData(localePt);

@Component({
  standalone: true,
  imports: [LancamentosPesquisa, PessoasPesquisa, Navbar, LancamentoCadastro, PessoasCadastro, RouterModule, ToastModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  providers: [Title],
})
export class App {
}
