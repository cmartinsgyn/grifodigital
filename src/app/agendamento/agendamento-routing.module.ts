import { AgendamentoListComponent } from './agendamento-list/agendamento-list.component';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { NgModule } from '@angular/core';
// guard
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'agendamento-cadastro',
     component: AgendamentoCadastroComponent,
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
  export class AgendamentoRoutingModule { }
