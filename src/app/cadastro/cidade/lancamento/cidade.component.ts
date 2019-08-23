import { EnunSevice } from './../../../service/enuns.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm, FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { Router, ActivatedRoute } from '@angular/router';

import { Cidade } from '../../../core/model/Cidade';
import { CidadeService } from './../cidade.service';
import { PaisesService } from '../../paises/paises.service';
import { ScriptListasService } from 'src/app/service/util-service/script-listas.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss']
})
export class CidadeComponent implements OnInit {

  cidade = new Cidade();
  cidadeSelecionada = new Cidade();
  cidades = [];
  estados = [];
  form: NgForm;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toasty: ToastyService,
    private paisesService: PaisesService,
    private scriptListService: ScriptListasService,
    private cidadeService: CidadeService,
    private enunService: EnunSevice
  ) { }

  ngOnInit() {
    const codigoPais = this.route.snapshot.params['codigo'];

    if (codigoPais) {
      this.editar(codigoPais);
    } else {
      this.title.setTitle('Nova Cidade');
    }
    this.scriptListService.criarFooTable();
    this.listarCidades();
    this.carregarEstados();
  }

  listarCidades() {
    this.cidadeService.listarTodas()
    .then(resultado => {
      this.cidades = resultado;
    });

  }

  carregarEstados() {
    this.enunService.buscaEstados()
    .then(resultado => {
      this.estados = resultado;
      console.log(this.estados);
    });

  }


  editar(codigo: number) {
    this.cidadeService.buscarPorCodigo(codigo)
    .then(response => {
      this.cidade = response;
      console.log(`cidades da edição: ${this.cidade}`);
      this.atualizarTituloEdicao();
    })
    .catch(erro => alert(`Deu ruim: ${erro}`));
  }

  /** define o paramêtro se está ou não em edição*/
  get editando() {
    return Boolean(this.cidade.codigo);
  }

  salvar(form: NgForm) {
    alert(JSON.stringify(this.cidade, null, 4));
    form.reset();
    this.toasty.success('Item cadastrado com sucesso!');
  }

  prepararExclusao(cidade: any) {
    this.cidadeSelecionada = cidade;
  }

  excluir (codigo: number) {
    this.cidadeService.excluir(codigo)
    .then(() => {
      this.listarCidades();
       this.toasty.success(`${this.cidadeSelecionada.nome} excluída com sucesso!`);
    })
    .catch(erro => alert(erro));

  }

  onReset(f: NgForm) {
    f.reset();
    setTimeout(() => {
      this.cidade = new Cidade();
        }, 1);
     this.router.navigate(['/cadastro-cidade']);
 }
 atualizarTituloEdicao() {
  this.title.setTitle('Edição de Cidade');
}

}
