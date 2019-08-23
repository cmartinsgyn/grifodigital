import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ScriptService } from '../script-agendamento.service';
import { Alert } from 'selenium-webdriver';
import { NgModel, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agendamento-cadastro',
  templateUrl: './agendamento-cadastro.component.html',
  styleUrls: ['./agendamento-cadastro.component.scss']
})
export class AgendamentoCadastroComponent implements OnInit, AfterViewInit {
  titulo: string;
  agenda = [];
  novosDados = [];

  constructor(
    private scriptService: ScriptService
  ) { }

  ngOnInit() {
    this.buscaAgenda();

    if (this.agenda == null) {
      alert('Agenda Vazia');
    } else {
      this.scriptService.eventos = this.agenda;
    }

  }

  buscaAgenda() {
    // substituir por busca no banco
    this.agenda = [
      {
        title: 'Evento adicionado no contrutor',
        start: new Date(2019, 8, 1)
      },
      {
        title: 'Evento adicionado no contrutor 2',
        start: new Date(2019, 8, 2)
      }
    ];
  }

  ngAfterViewInit(): void {
    this.scriptService.criarCalendar();
  }

  salvar(f: NgForm) {
    // pegar os dados digitados no script, passar para o serviço, fazer
    // as validações e salvar normalmente, recarrega a agenda, limpa a lista
    // de novos dados.
    alert(this.novosDados);
  }

  addEvent(f: NgForm) {
    this.scriptService.addEvent(this.titulo);
    this.fecharModal();
    this.novosDados.push(this.titulo);
  }

  fecharModal() {
    this.scriptService.fecharModal();
  }
}
