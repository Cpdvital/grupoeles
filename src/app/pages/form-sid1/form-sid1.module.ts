import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSid1Component } from './form-sid1.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormSid1Component


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ]
})
export class FormSid1Module { }
