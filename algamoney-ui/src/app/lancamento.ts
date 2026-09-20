import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Lancamento } from './core/model';


export class LancamentoFiltro {
  descricao: string = ''
  dataVencimentoInicio: any;
  dataVencimentoFim: any;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

    lancamentosUrl = 'http://localhost:8080/lancamentos';
    tokenUrl = 'http://localhost:8080/oauth2/token';

    constructor (private http: HttpClient) {}

    async pesquisar(filtro: LancamentoFiltro): Promise<any> {
        const tokenHeaders = new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic ' + btoa('angular:@ngul@r0'));

        const body = new HttpParams()
            .set('grant_type', 'client_credentials')
            .set('scope', 'read');

        const tokenResponse: any = await firstValueFrom(
            this.http.post(this.tokenUrl, body.toString(), { headers: tokenHeaders })
        );

        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${tokenResponse.access_token}`);

        let params = new HttpParams()
            .set('resumo', '');

        params = params.set('page', filtro.pagina.toString());
        params = params.set('size', filtro.itensPorPagina.toString());

        if (filtro.descricao) {
            params = params.set('descricao', filtro.descricao);
        }

        if(filtro.dataVencimentoInicio){
            params = params.set('dataVencimentoDe', this.formatDate(filtro.dataVencimentoInicio));
        }

        if(filtro.dataVencimentoFim){
            params = params.set('dataVencimentoAte', this.formatDate(filtro.dataVencimentoFim));
        }

        return firstValueFrom(this.http.get<any>(this.lancamentosUrl, { headers, params, responseType: 'json' }))
        .then((response: any) => {
            const lancamentos = response.content;
            const resultado = {
                lancamentos,
                total: response.totalElements
            };
            return resultado;
        });
    }

    async excluir(codigo: number): Promise<void> {
        const tokenHeaders = new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic ' + btoa('angular:@ngul@r0'));

        const body = new HttpParams()
            .set('grant_type', 'client_credentials')
            .set('scope', 'read');

        const tokenResponse: any = await firstValueFrom(
            this.http.post(this.tokenUrl, body.toString(), { headers: tokenHeaders })
        );

        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${tokenResponse.access_token}`);

        return firstValueFrom(this.http.delete<void>(`${this.lancamentosUrl}/${codigo}`, { headers }));
    }

    async adicionar(lancamento: Lancamento): Promise<Lancamento> {
        const tokenHeaders = new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic ' + btoa('angular:@ngul@r0'));

        const body = new HttpParams()
            .set('grant_type', 'client_credentials')
            .set('scope', 'read write');

        const tokenResponse: any = await firstValueFrom(
            this.http.post(this.tokenUrl, body.toString(), { headers: tokenHeaders })
        );

        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${tokenResponse.access_token}`)
            .append('Content-Type', 'application/json');

        return firstValueFrom(this.http.post<Lancamento>(this.lancamentosUrl, lancamento, { headers }));
    }

    async atualizar(lancamento: Lancamento): Promise<Lancamento> {
        const tokenHeaders = new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic ' + btoa('angular:@ngul@r0'));

        const body = new HttpParams()
            .set('grant_type', 'client_credentials')
            .set('scope', 'read write');

        const tokenResponse: any = await firstValueFrom(
            this.http.post(this.tokenUrl, body.toString(), { headers: tokenHeaders })
        );

        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${tokenResponse.access_token}`)
            .append('Content-Type', 'application/json');

        return firstValueFrom(
            this.http.put<Lancamento>(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento, { headers })
        );
    }

    async buscarPorCodigo(codigo: number): Promise<Lancamento> {
        const tokenHeaders = new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic ' + btoa('angular:@ngul@r0'));

        const body = new HttpParams()
            .set('grant_type', 'client_credentials')
            .set('scope', 'read');

        const tokenResponse: any = await firstValueFrom(
            this.http.post(this.tokenUrl, body.toString(), { headers: tokenHeaders })
        );

        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${tokenResponse.access_token}`);

        return firstValueFrom(this.http.get<Lancamento>(`${this.lancamentosUrl}/${codigo}`, { headers }))
            .then((lancamento: Lancamento) => {
                this.converterStringsParaDatas([lancamento]);
                return lancamento;
            });
    }

    private converterStringsParaDatas(lancamentos: Lancamento[]) {
        for (const lancamento of lancamentos) {
            if (lancamento.dataVencimento) {
                lancamento.dataVencimento = new Date(lancamento.dataVencimento + 'T00:00:00');
            }
            if (lancamento.dataPagamento) {
                lancamento.dataPagamento = new Date(lancamento.dataPagamento + 'T00:00:00');
            }
        }
    }

    private formatDate(date: Date): string {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }
}
