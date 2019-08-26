import { AgendamentoListComponent } from './agendamento-list/agendamento-list.component';
import { ManutencaoLancamentoComponent } from './manutencao-lancamento/manutencao-lancamento.component';
import { NgModule } from '@angular/core';
// guard
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'manutencao-lancamento',
     component: ManutencaoLancamentoComponent,
     // canActivate: [AuthGuard],
     // data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
    },
    { path: 'agendamento-list',
     component: AgendamentoListComponent,
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
  export class ManutencaoRoutingModule { }
