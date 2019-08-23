import { ScriptService } from '../script-agendamento.service';
import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.scss']
})
export class AgendamentoListComponent implements OnInit {

  constructor(
    private scriptService: ScriptService
  ) {  }

  ngOnInit() {
    this.scriptService.criarFooTable();
  }
}
