import { Component } from '@angular/core';
import {LancamentosPesquisa } from './lancamentos-pesquisa/lancamentos-pesquisa';
import { PessoasPesquisa } from './pessoas-pesquisa/pessoas-pesquisa';
import { Navbar } from './navbar/navbar';
import { LancamentoCadastro } from './lancamento-cadastro/lancamento-cadastro';


@Component({
  imports: [ LancamentosPesquisa, PessoasPesquisa, Navbar, LancamentoCadastro],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
