import { NgModule } from '@angular/core';
// guard
import { Routes, RouterModule } from '@angular/router';

import { UserCadastroComponent } from '../user/user-cadastro/user-cadastro.component';
import { UserGrupoComponent } from '../user/user-grupo/user-grupo.component';

const routes: Routes = [
    { path: 'usuario-cadastro',
     component: UserCadastroComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    },
    { path: 'usuario-grupo',
     component: UserGrupoComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    }

    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes) // possibilita que app-routing.module enxerge essas rotas.
    ],
    exports: [RouterModule]
})
  export class UserRoutingModule { }
