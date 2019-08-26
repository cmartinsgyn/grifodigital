import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgendamentoListComponent } from './agendamento-list/agendamento-list.component';
import { ManutencaoLancamentoComponent } from './manutencao-lancamento/manutencao-lancamento.component';
import { ManutencaoRoutingModule } from './manutencao-routing.module';


@NgModule({
    declarations: [
        ManutencaoLancamentoComponent,
        AgendamentoListComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ManutencaoRoutingModule,
    ]
})
export class AgendamentoModule {
}
