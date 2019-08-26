import { Estado } from './../core/model/Estado';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class EnunSevice {
    estadosUrl: string;
    ENUM_ESTADO: Estado[];

    constructor(private http: Http) {
        // this.estadosUrl = `${environment.apiUrl}/cidades/estados`;
    }

    buscaEstados() {
        return this.http.get(`${this.estadosUrl}`)
        .toPromise()
        .then(resultado => {
           this.ENUM_ESTADO = resultado.json();
           const estados = this.ENUM_ESTADO;

            return estados;
        });

    }
  }
