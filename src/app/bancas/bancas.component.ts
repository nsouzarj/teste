import { BancaservicoService } from './../servicos/servicobanca.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bancas',
  templateUrl: './bancas.component.html',
  styleUrls: ['./bancas.component.css']
})
export class BancasComponent implements OnInit {
  bancas: [];
  colunas: any;
  constructor(private servicoBanca: BancaservicoService) { }


  ngOnInit() {
    // Traz as bancas
    this.colunas = [{ field: 'id', header: 'ID' },
    { field: 'banca', header: 'NOME' },
    { field: 'email', header: 'EMAIL' },
    { field: 'emailgestordabanca', header: 'EMAIL RESPONSAVEL' }];


    this.servicoBanca.getBancas().subscribe(bancas => { this.bancas = bancas; });

  }

}

