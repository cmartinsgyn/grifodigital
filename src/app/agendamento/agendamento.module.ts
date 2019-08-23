import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentoListComponent } from './agendamento-list/agendamento-list.component';
import { AgendamentoRoutingModule } from './agendamento-routing.module';


@NgModule({
    declarations: [
        AgendamentoCadastroComponent,
        AgendamentoListComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AgendamentoRoutingModule,
    ]
})
export class AgendamentoModule {
}
