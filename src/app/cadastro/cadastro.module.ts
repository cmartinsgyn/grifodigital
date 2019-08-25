import { CidadeService } from './cidade/cidade.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CidadeComponent } from './cidade/lancamento/cidade.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CidadeComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CadastroRoutingModule,
        SharedModule,

    ],
    providers: [
        CidadeService
    ]
})
export class CadastroModule {
}
