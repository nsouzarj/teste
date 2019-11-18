import { Solicitacao } from 'src/app/models/model.geral';
import { Component, OnInit } from '@angular/core';
import { ServicosolicitacaoService } from 'src/app/servicos/servicosolicitacao.service';
import { DynamicDialogConfig, DialogService } from 'primeng/api';




@Component({
  selector: 'app-soliunica',
  templateUrl: './soliunica.component.html',
  styleUrls: ['./soliunica.component.css'],
  providers: [DialogService]
})
export class SoliunicaComponent implements OnInit {
  soli: any;

  constructor(private solicitacaoservico: ServicosolicitacaoService, public config: DynamicDialogConfig) { }


  ngOnInit() {
    this.soli = this.config.data.id;
    // this.solicitacaoservico.getUnicaSolicitacao(this.config.data.id).subscribe(soli => {
    //  this.soli = soli;
    //  console.log(this.soli);
    // });

  }

}

