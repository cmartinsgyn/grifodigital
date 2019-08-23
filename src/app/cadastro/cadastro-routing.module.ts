import { NgModule } from '@angular/core';
// guard
import { Routes, RouterModule } from '@angular/router';

import { PaisesComponent } from './paises/lancamento/paises.component';
import { PaisesListComponent } from './paises/paises-list/paises-list.component';
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
    { path: 'cadastro-paises', component: PaisesComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    },
    { path: 'cadastro-paises/:codigo', component: PaisesComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    },
    { path: 'list-paises', component: PaisesListComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    },

    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes) // possibilita que app-routing.module enxerge essas rotas.
    ],
    exports: [RouterModule]
})
  export class CadastroRoutingModule { }
