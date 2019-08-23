import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ScriptListasService } from 'src/app/service/util-service/script-listas.service';
import { Pais } from 'src/app/core/model/Pais';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.scss']
})
export class PaisesListComponent implements OnInit {
  paises: any;
  paisSelecionado = new Pais();

  constructor(
    private scriptListService: ScriptListasService,
    private title: Title,
    private paisesService: PaisesService
  ) { }

  ngOnInit() {
    this.title.setTitle('Países');
    this.scriptListService.criarFooTable();
    this.listarPaises();
  }

  listarPaises() {
    this.paises = this.paisesService.listarPaises();
  }

  buscarPaisPorCodigo(codigo: number) {
    console.log(`pais passado pela lista: ${codigo}`);
    this.paisSelecionado.codigo = 1;
    this.paisSelecionado.nome = 'Brasil';
    this.paisSelecionado.sigla = 'BRA';
    return this.paisSelecionado;
  }

  excluir () {
    console.log(this.paisSelecionado);
  }

}
