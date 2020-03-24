import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { FormSid1Component } from './pages/form-sid1/form-sid1.component';
import { LoginComponent } from './pages/login/login.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeelesComponent } from './pages/homeeles/homeeles.component';
import { CdelesComponent } from './pages/cdeles/cdeles.component';
import { MusicaelesComponent } from './pages/musicaeles/musicaeles.component';
import { AgendaelesComponent } from './pages/agendaeles/agendaeles.component';


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
