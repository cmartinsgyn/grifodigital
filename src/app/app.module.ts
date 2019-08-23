import { SharedModule } from './shared/shared.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { UserModule } from './user/user.module';
import { AtendimentoModule } from './atendimento/atendimento.module';
import { CaracterEspecialDirective } from './shared/directives/validacoes-util/caracter-especial.directive';

@NgModule({
  declarations: [
    AppComponent, CaracterEspecialDirective
    ],

  imports: [
  BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    HomeModule,
    CadastroModule,
    CoreModule,
    UserModule,
    AgendamentoModule,
    AtendimentoModule,
    SharedModule,
    ToastyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
