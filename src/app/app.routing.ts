import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { FormSid1Component } from './examples/form-sid1/form-sid1.component';
import { LoginComponent } from './examples/login/login.component';
import { ContatoComponent } from './examples/contato/contato.component';
import { HomeelesComponent } from './examples/homeeles/homeeles.component';
import { CdelesComponent } from './examples/cdeles/cdeles.component';
import { MusicaelesComponent } from './examples/musicaeles/musicaeles.component';
import { AgendaelesComponent } from './examples/agendaeles/agendaeles.component';


const routes: Routes =[
    { path: '', redirectTo: 'homeeles', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'form-sid1',        component: FormSid1Component},
    { path: 'login',            component: LoginComponent},
    { path: 'contato',          component: ContatoComponent},
    { path: 'homeeles',          component: HomeelesComponent},
    { path: 'cdeles',            component: CdelesComponent},
    { path: 'musicaeles',            component: MusicaelesComponent},
    { path: 'agendaeles',            component: AgendaelesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
