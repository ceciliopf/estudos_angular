import { Component } from '@angular/core';
import { LancamentosPesquisa } from './lancamentos-pesquisa/lancamentos-pesquisa';
import { PessoasPesquisa } from './pessoas-pesquisa/pessoas-pesquisa';
import { Navbar } from './navbar/navbar';
import { LancamentoCadastro } from './lancamento-cadastro/lancamento-cadastro';
import { PessoasCadastro } from './pessoas-cadastro/pessoas-cadastro';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ToastModule } from 'primeng/toast';

registerLocaleData(localePt);

@Component({
  imports: [LancamentosPesquisa, PessoasPesquisa, Navbar, LancamentoCadastro, PessoasCadastro, ToastModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  providers: [],
})
export class App {
}
