import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Pais } from 'src/app/core/model/Pais';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  pais = new Pais();

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    const codigoPais = this.route.snapshot.params['codigo'];

    if (codigoPais) {
      this.carregarPais(codigoPais);
    } else {
      this.title.setTitle('Novo País');
    }
  }

  /** define o paramêtro se está ou não em edição*/
  get editando() {
    return Boolean(this.pais.codigo);
  }

  carregarPais(codigo: number) {
    console.log(`buscar e editar: ${codigo}`);
    this.pais.codigo = 1;
    this.pais.nome = 'Brasil';
    this.pais.sigla = 'BRA';
    // this.pais = this.pais; // aqui é o resultado da consulta do serviço
    this.atualizarTituloEdicao();

}

  salvar(form: FormControl) {
    console.log(`pais: ${this.pais.nome} - sigla: ${this.pais.sigla}`);
    form.reset();
    this.toastyService.success('Item cadastrado com sucesso!');
 }

  onReset(f: FormControl) {
    f.reset();
    setTimeout(() => {
      this.pais = new Pais();
        }, 1);
    this.router.navigate(['/cadastro-paises']);
 }

 atualizarTituloEdicao() {
  this.title.setTitle('Edição de País');
}

}
