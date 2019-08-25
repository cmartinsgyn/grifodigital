import { NgModule } from '@angular/core';
// guard
import { Routes, RouterModule } from '@angular/router';

import { CidadeComponent } from './cidade/lancamento/cidade.component';


const routes: Routes = [
    { path: 'cadastro-cidade', component: CidadeComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    },
    { path: 'cadastro-cidade/:codigo', component: CidadeComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    },
    // { path: 'cadastro-paises', component: PaisesComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    // },

    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes) // possibilita que app-routing.module enxerge essas rotas.
    ],
    exports: [RouterModule]
})
  export class CadastroRoutingModule { }
