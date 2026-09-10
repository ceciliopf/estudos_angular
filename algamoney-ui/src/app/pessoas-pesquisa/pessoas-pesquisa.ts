import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonDirective } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [RouterOutlet, TabViewModule, InputTextModule, TableModule, ButtonDirective, CommonModule, TagModule, TooltipModule],
  selector: 'app-pessoas-pesquisa',
  styleUrl: './pessoas-pesquisa.css',
  templateUrl: './pessoas-pesquisa.html',
})
export class PessoasPesquisa {
  pessoas = [
    {
      nome: 'Manoel Pinheiro',
      cidade: 'Uberlândia',
      estado: 'MG',
      ativo: true
    },
    {
      nome: 'Sebastião da Silva',
      cidade: 'São Paulo',
      estado: 'SP',
      ativo: false
    },
    {
      nome: 'Carla Souza',
      cidade: 'Florianópolis',
      estado: 'SC',
      ativo: true
    },
    {
      nome: 'Luís Pereira',
      cidade: 'Curitiba',
      estado: 'PR',
      ativo: true
    },
    {
      nome: 'Vilmar Andrade',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      ativo: false
    },
    {
      nome: 'Paula Maria',
      cidade: 'Uberlândia',
      estado: 'MG',
      ativo: true
    }
  ];
}
