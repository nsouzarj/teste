import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormbaseComponent } from 'src/app/shared/formbase/formbase.component';

@Component({
  selector: 'app-cadprocessos',
  templateUrl: './cadprocessos.component.html',
  styleUrls: ['./cadprocessos.component.css']
})
export class CadprocessosComponent extends FormbaseComponent implements OnInit {
  formpadrao = new FormGroup({
    numeroprocesso: new FormControl('', Validators.required),
    adverso: new FormControl('', Validators.required),
    localizacao: new FormControl('', Validators.required),
    posicao: new FormControl('', Validators.required),
    autor: new FormControl('', Validators.required),
    proceletronico: new FormControl('', Validators.required),
    comarca_id: new FormControl('', Validators.required),
    orgao_id: new FormControl('', Validators.required),
    assunto: new FormControl('', Validators.required),
    numorgao: new FormControl('', Validators.required)
  });

  constructor() {
    super();
  }

  ngOnInit() {}
}
