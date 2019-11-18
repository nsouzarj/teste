import { FormbaseComponent } from './../shared/formbase/formbase.component';
import { Component, OnInit } from '@angular/core';
import { ServicousuarioService } from '../servicos/servicousuario.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { SortEvent, MessageService, DialogService } from 'primeng/api';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent extends FormbaseComponent implements OnInit {
  usuarios: any;
  colunas: any;

  formUsuario = new FormGroup({
    nomecompleto: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),

  });

  constructor(private servicoUsuario: ServicousuarioService) {
    super();
  }

  ngOnInit() {
    this.servicoUsuario.getUsuario().subscribe(usuarios => {
      this.usuarios = usuarios;

  this.colunas = [
    { field: 'id', header: 'ID' },
    { field: 'nomecompleto', header: 'Nome Completo' },
    { field: 'emailprincipal', header: 'Email' },
    { field: '', header: 'Selecionar' }];

    });


  }


  // Faz a sortagem das colunas
  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      const value1 = data1[event.field];
      const value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) {
        result = -1;
      } else if (value1 != null && value2 == null) {
        result = 1;
      } else if (value1 == null && value2 == null) {
        result = 0;
      } else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
      }

      return (event.order * result);
    });
  }
}
