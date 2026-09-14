import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  imports: [FormsModule, InputTextModule, ButtonModule, TextareaModule, CalendarModule, SelectButtonModule, DropdownModule, InputNumberModule],
  selector: 'app-lancamento-cadastro',
  styleUrl: './lancamento-cadastro.css',
  templateUrl: './lancamento-cadastro.html',
})
export class LancamentoCadastro {
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];
  
  categorias = [
    {label: 'Alimentação', value: 'ALIMENTACAO'},
    {label: 'Transporte', value: 'TRANSPORTE'},
    {label: 'Moradia', value: 'MORADIA'},
    {label: 'Saúde', value: 'SAUDE'},
    {label: 'Lazer', value: 'LAZER'},
    {label: 'Outros', value: 'OUTROS'}
  ];
  

  pessoas = [
    {label: 'João Silva', value: 'JOAO_SILVA'},
    {label: 'Maria Silva', value: 'MARIA_SILVA'},
    {label: 'Pedro Silva', value: 'PEDRO_SILVA'},
    {label: 'Ana Silva', value: 'ANA_SILVA'},
    {label: 'Carlos Silva', value: 'CARLOS_SILVA'},
    {label: 'Marta Silva', value: 'MARTA_SILVA'},
    {label: 'José Silva', value: 'JOSE_SILVA'},
    {label: 'Francisca Silva', value: 'FRANCISCA_SILVA'},
    {label: 'Antônio Silva', value: 'ANTONIO_SILVA'},
    {label: 'Francisca Silva', value: 'FRANCISCA_SILVA'}
  ];
  

  lancamento = {
    tipo: 'RECEITA',
    dataVencimento: new Date(),
    dataPagamento: new Date(),
    valor: 0,
    descricao: '',
    categoria: null,
    pessoa: ''
  }

 }

