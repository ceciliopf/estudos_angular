import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


export interface LancamentoFiltro {
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class Lancamento {

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

        if (filtro.descricao) {
            params = params.set('descricao', filtro.descricao);
        }

        return firstValueFrom(this.http.get<any>(this.lancamentosUrl, { headers, params, responseType: 'json' }))
        .then((response: any) => {
            return response.content;
        });
    }
}
