import { AtendimentoListComponent } from './atendimento-list/atendimento-list.component';
import { AtendimentoCadastroComponent } from './atendimento-cadastro/atendimento-cadastro.component';
import { NgModule } from '@angular/core';
// guard
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'atendimento-cadastro',
     component: AtendimentoCadastroComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    },
    { path: 'atendimento-list',
     component: AtendimentoListComponent,
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
  export class AtendimentoRoutingModule { }
