import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pagina-nao-encontrada',
  styles: `
    .container {
        text-align: center;
        margin-top: 100px;
    }
  `,
  template: `
    <div class="container">
        <h1>404</h1>
        <p>Página não encontrada</p>
    </div>
  `,
})
export class PaginaNaoEncontrada { }
