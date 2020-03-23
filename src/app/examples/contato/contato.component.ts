import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup;

    focus;
    focus1;

  constructor() { }onSubmit(){
    console.log(this.formulario.value);
  }

  ngOnInit() {
  }



}
