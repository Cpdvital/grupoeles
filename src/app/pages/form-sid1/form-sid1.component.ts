//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-form-sid1',
  templateUrl: './form-sid1.component.html',
  styleUrls: ['./form-sid1.component.scss']
})
export class FormSid1Component implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private http: HttpClient,
    
    ) { }

  ngOnInit() {
    /*
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)

    });
    */

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });

  }

  onSubmit(){
    console.log(this.formulario.value);

    //this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))      
     // .subscribe(dados => console.log(dados));
  }

}
