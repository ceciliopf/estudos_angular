import { Routes } from '@angular/router';
import { LancamentosPesquisa } from './lancamentos-pesquisa/lancamentos-pesquisa';
import { LancamentoCadastro } from './lancamento-cadastro/lancamento-cadastro';
import { PessoasCadastro } from './pessoas-cadastro/pessoas-cadastro';
import { PessoasPesquisa } from './pessoas-pesquisa/pessoas-pesquisa';

export const routes: Routes = [
    { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
    { path: 'lancamentos', component: LancamentosPesquisa },
    { path: 'lancamentos/novo', component: LancamentoCadastro },
    { path: 'lancamentos/:codigo', component: LancamentoCadastro },
    { path: 'pessoas', component: PessoasPesquisa },
    { path: 'pessoas/novo', component: PessoasCadastro },
    { path: 'pessoas/:codigo', component: PessoasCadastro },
];
