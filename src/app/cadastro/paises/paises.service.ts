import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PaisesService {

  paises = [];

  public listarPaises () {
    this.paises = [
        {codigo: 1, nome: 'Brasil', sigla: 'BRA'},
        {codigo: 2, nome: 'Estados Unidos da América', sigla: 'USA'},
        {codigo: 3, nome: 'Israel', sigla: 'ISR'}
    ];

    return this.paises;

 }
}
