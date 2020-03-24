import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormSid1Component } from './form-sid1/form-sid1.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeelesComponent } from './homeeles/homeeles.component';
import { CdelesComponent } from './cdeles/cdeles.component';
import { MusicaelesComponent } from './musicaeles/musicaeles.component';
import { AgendaelesComponent } from './agendaeles/agendaeles.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,  
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        FormSid1Component,
        //LoginComponent,
        ContatoComponent,
        HomeelesComponent,
        CdelesComponent,
        MusicaelesComponent,
        AgendaelesComponent,
    ]
})
export class PagesModule { }
