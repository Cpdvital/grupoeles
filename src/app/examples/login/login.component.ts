import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  formulario: FormGroup;

  test: Date = new Date();
    focus;
    focus1;

  constructor(private _formBuilder: FormBuilder) { }

  onSubmit(){
    console.log(this.formulario.value);
  }

  ngOnInit() {
      this.formulario = this._formBuilder.group({
        nome: ['', Validators.required],
        empresa: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', Validators.required],
        assunto: ['', Validators.required],
        mensagem: ['', Validators.required]
    });
  }

  
  
}

