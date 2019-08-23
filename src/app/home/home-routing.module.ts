import { NgModule } from '@angular/core';
// guard
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    { path: 'home',
     component: HomeComponent,
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
  export class HomeRoutingModule { }
