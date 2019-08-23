import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserCadastroComponent } from './user-cadastro/user-cadastro.component';
import { UserGrupoComponent } from './user-grupo/user-grupo.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
    declarations: [
       UserCadastroComponent,
       UserGrupoComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule
    ]
})
export class UserModule {
}
