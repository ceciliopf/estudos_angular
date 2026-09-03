import { Component } from '@angular/core';
import {LancamentosPesquisa } from './lancamentos-pesquisa/lancamentos-pesquisa';


@Component({
  imports: [ LancamentosPesquisa ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
