import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SignInComponent } from '../seguranca/signin/signin.component';
import { SignUpComponent } from '../seguranca/singup/singup.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule, // Para user *nfIf, etc..
        FormsModule,
        ReactiveFormsModule, // Para usar formGroup, formBuilder...
        HomeRoutingModule
    ]
})
export class HomeModule { }
