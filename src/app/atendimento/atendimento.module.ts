import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtendimentoCadastroComponent } from './atendimento-cadastro/atendimento-cadastro.component';
import { AtendimentoListComponent } from './atendimento-list/atendimento-list.component';
import { AtendimentoRoutingModule } from './atendimento-routing.module';

@NgModule({
    declarations: [
        AtendimentoCadastroComponent,
        AtendimentoListComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AtendimentoRoutingModule
    ]
})
export class AtendimentoModule {
}
