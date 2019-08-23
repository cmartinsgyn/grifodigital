import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Cidade } from 'src/app/core/model/Cidade';

@Injectable()
export class CidadeService {

    cidadeUrl: string;

    constructor(private http: Http) {
        this.cidadeUrl = `${environment.apiUrl}/cidades`;
    }

    listarTodas(): Promise<any> {
        return this.http.get(`${this.cidadeUrl}`)
        .toPromise()
        .then(response => {
            const responseJson = response.json();
            const cidades = responseJson.content;

         return cidades;
        });

  }

  buscarPorCodigo(codigo: number): Promise<Cidade> {
    return this.http.get(`${this.cidadeUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const cidade = response.json() as Cidade;
        return cidade;
      });
  }

  excluir (codigo: number): Promise<void> {

    return this.http.delete(`${this.cidadeUrl}/${codigo}`)
    .toPromise()
    .then(() => null);

  }

}
