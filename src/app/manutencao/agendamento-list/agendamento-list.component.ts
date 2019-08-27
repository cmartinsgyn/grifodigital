
import { Component, OnInit } from '@angular/core';
import { ScriptListasService } from 'app/service/util-service/script-listas.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.scss']
})
export class AgendamentoListComponent implements OnInit {

  constructor(
    private scriptListasService: ScriptListasService
  ) {  }

  ngOnInit() {
    this.scriptListasService.criarFooTable();
  }
}
