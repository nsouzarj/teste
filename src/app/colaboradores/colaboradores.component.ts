
import { Component, OnInit } from '@angular/core';
import { Correspondente } from '../models/model.geral';
import { ColaboradorservicoService } from '../servicos/colaboradorservico.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  colunas: any;
  colaborador: Correspondente[];
  constructor(private colabservico: ColaboradorservicoService) {
  }

  ngOnInit() {
    this.colunas = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'NOME' },
      { field: 'oab', header: 'OAB' },
      { field: 'emailprimario', header: 'EMAIL' },
      { field: 'telefoneprimario', header: 'TEL' },
      { field: 'telefonecelularprimario', header: 'CELULAR' },  ];

      this.colabservico.getColaborador().subscribe(colaborador => {
        this.colaborador = colaborador;

        console.log(this.colaborador);
      });

  }
  /*
  idcorrespondente: Number;
  nome: String;
  oab: String;
  emailprimario: String;
  telefoneprimario: String;
  celularprimario: String;
  */

}
