import { CidadeService } from './cidade/cidade.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CidadeComponent } from './cidade/lancamento/cidade.component';
import { PaisesComponent } from './paises/lancamento/paises.component';
import { PaisesListComponent } from './paises/paises-list/paises-list.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PaisesComponent,
        CidadeComponent,
        PaisesListComponent
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
