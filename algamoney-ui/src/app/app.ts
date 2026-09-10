import { Component } from '@angular/core';
import {LancamentosPesquisa } from './lancamentos-pesquisa/lancamentos-pesquisa';
import { Navbar } from './navbar/navbar';


@Component({
  imports: [ LancamentosPesquisa, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
