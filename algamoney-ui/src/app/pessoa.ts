import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export class PessoaFiltro {
  nome: string = '';
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

    pessoasUrl = 'http://localhost:8080/pessoa';
    tokenUrl = 'http://localhost:8080/oauth2/token';

    constructor (private http: HttpClient) {}

    async pesquisar(filtro: PessoaFiltro): Promise<any> {
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
            .set('page', filtro.pagina.toString())
            .set('size', filtro.itensPorPagina.toString());

        if (filtro.nome) {
            params = params.set('nome', filtro.nome);
        }

        return firstValueFrom(this.http.get<any>(this.pessoasUrl, { headers, params, responseType: 'json' }))
        .then((response: any) => {
            const pessoas = response.content;
            const resultado = {
                pessoas,
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

        return firstValueFrom(this.http.delete<void>(`${this.pessoasUrl}/${codigo}`, { headers }));
    }

    async mudarStatus(codigo: number, ativo: boolean): Promise<void> {
        const tokenHeaders = new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic ' + btoa('angular:@ngul@r0'));

        const bodyAuth = new HttpParams()
            .set('grant_type', 'client_credentials')
            .set('scope', 'read');

        const tokenResponse: any = await firstValueFrom(
            this.http.post(this.tokenUrl, bodyAuth.toString(), { headers: tokenHeaders })
        );

        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${tokenResponse.access_token}`)
            .append('Content-Type', 'application/json');

        return firstValueFrom(this.http.put<void>(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers }));
    }
}
