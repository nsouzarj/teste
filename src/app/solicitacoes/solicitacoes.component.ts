
import { Solicitacao, Correspondente, BancaProcesso, Comarca, Usuario, Status, Orgao } from './../models/model.geral';
import { Component, OnInit } from '@angular/core';
import { ServicosolicitacaoService } from '../servicos/servicosolicitacao.service';
import { SortEvent, MessageService, DialogService } from 'primeng/api';
import { SoliunicaComponent } from './soliunica/soliunica.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormbaseComponent } from '../shared/formbase/formbase.component';
import { SelectItem } from 'primeng/api';
import { isUndefined } from 'util';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css'],
  providers: [MessageService, DialogService, FormBuilder],
  styles: [`
        /* Column Priorities */
        @media only all {
            th.ui-p-6,
            td.ui-p-6,
            th.ui-p-5,
            td.ui-p-5,
            th.ui-p-4,
            td.ui-p-4,
            th.ui-p-3,
            td.ui-p-3,
            th.ui-p-2,
            td.ui-p-2,
            th.ui-p-1,
            td.ui-p-1 {
                display: none;
            }
        }

        /* Show priority 1 at 320px (20em x 16px) */
        @media screen and (min-width: 20em) {
            th.ui-p-1,
            td.ui-p-1 {
                display: table-cell;
            }
        }

        /* Show priority 2 at 480px (30em x 16px) */
        @media screen and (min-width: 30em) {
            th.ui-p-2,
            td.ui-p-2 {
                display: table-cell;
            }
        }

        /* Show priority 3 at 640px (40em x 16px) */
        @media screen and (min-width: 40em) {
            th.ui-p-3,
            td.ui-p-3 {
                display: table-cell;
            }
        }

        /* Show priority 4 at 800px (50em x 16px) */
        @media screen and (min-width: 50em) {
            th.ui-p-4,
            td.ui-p-4 {
                display: table-cell;
            }
        }

        /* Show priority 5 at 960px (60em x 16px) */
        @media screen and (min-width: 60em) {
            th.ui-p-5,
            td.ui-p-5 {
                display: table-cell;
            }
        }

        /* Show priority 6 at 1,120px (70em x 16px) */
        @media screen and (min-width: 70em) {
            th.ui-p-6,
            td.ui-p-6 {
                display: table-cell;
            }
        }
    `],
})

export class SolicitacoesComponent extends FormbaseComponent implements OnInit {
  solicitacao: any ;
  soliunica: any;
  todoscolaborador: Correspondente[];
  bancas: BancaProcesso[];
  estados: any; // Uf[];
  orgaos: Orgao[];
  usuarios: Usuario[];
  comarcas: any;
  status: Status[];
  listastatus: any;
  colunas: any;
  colab: any;
  banca: any;
  estado: any;
  estadoslista: any;
  comarcaslista: any;
  usuarioli: any;

  iduf = 0;
  tipo: String = 'T';
  datbusca1: Date = new Date('01/01/2013');
  datbusca2: Date = new Date('01/01/2060');
  listaorgao: any;
  correspondente: any;
  comarca: any;
  tipodata: Number;
  tipoperido = 1;

  idsolicitacao = 0;
  numprocesso = '';
  idcorrespondente = 0;
  idusuario = 0;
  numerointegracao = '';
  idcomarca = 0;
  idorgao = 0;
  idstatus = 0;
  tiposolicitacao = 'T';
  datainicial: Date;
  datafinal: Date;
  autor: String = '';
  reu: String = '';
  tipodatabusca = '';
  idbanca = 0;
  proclocalizacao = '';
  valorchave: any;
  datafinaldoida: Date;
  vai: String;
  en: any;
  idbusca: any;

  formpadrao = new FormGroup({
    numero: new FormControl('0'),
    numprocesso: new FormControl(''),
    correspondente: new FormControl('0'),
    idusuario: new FormControl('0'),
    numerointegracao: new FormControl(''),
    comarca: new FormControl('0'),
    orgao: new FormControl('0'),
    bancabusca: new FormControl('0'),
    status: new FormControl('0'),
    tiposolicitacao: new FormControl('T'),
    datainicial: new FormControl(''),
    datafinal: new FormControl(''),
    autornome: new FormControl(''),
    reunome: new FormControl(''),
    tipoperido: new FormControl('0'),
    estado: new FormControl('0'),
    tipo: new FormControl('T'),
    procolocalizaco: new FormControl('')
  });

  // tslint:disable-next-line:max-line-length
  constructor(public dialog: DialogService,
    // tslint:disable-next-line:max-line-length

    private solicitacaoservico: ServicosolicitacaoService,
    private messageService: MessageService) {
    super();
  }

  ngOnInit() {

    this.en = {
      firstDayOfWeek: 1,
      dayNames: ['Domigo', 'Segunda', 'Terça', 'Quarta', 'Qunita', 'Sexta', 'Sabado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qt', 'Se', 'Sa'],
      // tslint:disable-next-line:max-line-length
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julio', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/mm/yy'
    };



    // Aqui e so para lista as combos
    this.colab = [{ name: 'nome', code: 'id' }];
    this.banca = [{ name: 'banca', code: 'id' }];
    this.estadoslista = [{ name: 'nome', code: 'id' }];
    this.comarcaslista = [{ name: 'nome', code: 'id' }];
    this.usuarioli = [{ name: 'nomecompleto', code: 'id' }];
    this.listastatus = [{ name: 'status', code: 'id' }];
    this.listaorgao = [{ name: 'descricao', code: 'id' }];
    /**
     * Aqui define  a tabeç
     */
    this.colunas = [
      { field: 'id', header: 'ID' },
      { field: 'numeroprocesso', header: 'Processo' },
      { field: 'adverso', header: 'Réu' },
      { field: 'parte', header: 'Autor' },
      { field: 'datasolictacao', header: 'DataSoli' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'login', header: 'Usuario' },
      { field: 'valor', header: 'Valor' },
      { field: 'selecionar', header: 'SELECIONAR' }];

    // Pega os usuarios
    this.solicitacaoservico.getUsuarioAtivo().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(usuarios);
    });

    // Pega os sattus
    this.solicitacaoservico.getStatus().subscribe(status => {
      this.status = status;
    });


    this.solicitacaoservico.getColaborador().subscribe(todoscolaborador => {
      this.todoscolaborador = todoscolaborador;
      //  console.log(this.todoscolaborador);

    });

    this.solicitacaoservico.getOrgao().subscribe(orgaos => {
      this.orgaos = orgaos;
    });

    // Traz as bancas
    this.solicitacaoservico.getBancas().subscribe(bancas => {
      this.bancas = bancas;
      // console.log(this.bancas);
    });
    // Pega os usuario doo sistema

    // Traz os estados
    this.solicitacaoservico.getUf().subscribe(estados => {
      this.estados = estados;
      // this.iduf = this.estados.iduf;
      // console.log(this.iduf);
    });


  }

  // Reseta o form
  reseta() {
    // Limpa as variaveis
    this.msgs = [];
    this.solicitacao = null;
    this.datbusca1 = new Date('01/01/2013');
    this.datbusca2 = new Date('01/01/2020');
    this.tiposolicitacao = 'T';
    this.tipoperido = 1;
    this.idcorrespondente = 0;
    this.idbanca = 0;
    this.idusuario = 0;
    this.idcomarca = 0;
    this.idorgao = 0;
    this.iduf = 0;
    this.idstatus = 0;
    this.idsolicitacao = 0;
    this.autor = '';
    this.reu = '';


    // Limpa as listas
    this.colab = null;
    this.banca = null;
    this.estadoslista = null;
    this.comarcaslista = null;
    this.usuarioli = null;
    this.listastatus = null;
    this.listaorgao = null;
    this.formpadrao.value.numero = 0;

    // Pega os usuarios
    this.solicitacaoservico.getUsuarioAtivo().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(usuarios);
    });

    // Pega os sattus
    this.solicitacaoservico.getStatus().subscribe(status => {
      this.status = status;
    });


    this.solicitacaoservico.getColaborador().subscribe(todoscolaborador => {
      this.todoscolaborador = todoscolaborador;
      //  console.log(this.todoscolaborador);

    });

    this.solicitacaoservico.getOrgao().subscribe(orgaos => {
      this.orgaos = orgaos;
    });

    // Traz as bancas
    this.solicitacaoservico.getBancas().subscribe(bancas => {
      this.bancas = bancas;
      // console.log(this.bancas);
    });
    // Pega os usuario doo sistema

    // Traz os estados
    this.solicitacaoservico.getUf().subscribe(estados => {
      this.estados = estados;
    });


  }

  listausu() {
    console.log(this.usuarioli);
  }

  // Pega as comarcas por estado
  buscaestados(estados: any) {
    // console.log(estados);
    this.solicitacaoservico.getUfporEstado(estados).subscribe(comarcas => {
      this.comarcas = comarcas;

    });
    this.setaUf();
  }


  setaColaborador() {
    this.idcorrespondente = this.colab.idcorrespondente;
  }

  setaBanca() {
    this.idbanca = this.banca.idbanca;
  }

  setaComarca() {
    this.idcomarca = this.comarcaslista.idcomarca;
  }

  setaUsuario() {
    this.idusuario = this.usuarioli.idusuario;
  }

  setaStatus() {
    this.idstatus = this.listastatus.idstatus;
  }

  setaOrgao() {
    this.idorgao = this.listaorgao.idorgao;
  }
  setaUf() {
    this.iduf = this.estadoslista.iduf;
  }

  busca() {
    if (this.idsolicitacao === 0) {
      this.trazTodasFiltradas();
    } else {
      this.trazUnica();
    }
  }

  /**
   *
   * @param event Traz todas pelo filtro
   */

  trazTodasFiltradas() {

    this.solicitacao = null;
    this.showInfo('Aguarde a busca dos dados poderá custar conforme o filtro');
    this.idsolicitacao = this.formpadrao.value.numero;
    this.numprocesso = JSON.stringify(this.formpadrao.value.numprocesso);

    this.proclocalizacao = JSON.stringify(this.formpadrao.value.proclocalizacao);

    this.numerointegracao = JSON.stringify(this.formpadrao.value.numerointegracao);
    this.tiposolicitacao = JSON.stringify(this.formpadrao.value.tipo);

    this.datainicial = this.formpadrao.value.datainicial;
    this.datafinal = this.formpadrao.value.datafinal;

    this.tipoperido = this.formpadrao.value.tipoperido;
    this.tiposolicitacao = this.formpadrao.value.tiposolicitacao;

    // this.autor = this.formpadrao.value.autornome;
    // this.reu = this.formpadrao.value.reunome;

    if (this.autor !== '') {
      this.reu = JSON.stringify(this.formpadrao.value.reunome);
    } else if (this.reu !== '') {
      this.autor = JSON.stringify(this.formpadrao.value.autornome);
    } else {
      this.reu = JSON.stringify(this.formpadrao.value.reunome);
      this.autor = JSON.stringify(this.formpadrao.value.autornome);
    }

    /*  getSolicitaco(numero: any, numprocesso: any, correspondente: any, idusuario: any,
    numerointegracao: any, comarca: any, orgao: any, status: any, tiposolicitacao: any,
    datainicial: any, datafinal: any, autor: any, reu: any, tipoperido: any,
    estado: any, bancabusca: any, proclocalizacao: any) {
    *  */



    this.proclocalizacao = JSON.stringify(this.formpadrao.value.procolocalizaco);
    this.solicitacao = null;
    this.solicitacaoservico.getSolicitaco(this.idsolicitacao, this.numprocesso, this.idcorrespondente, this.idusuario,
      this.numerointegracao, this.idcomarca, this.idorgao, this.idstatus, this.tiposolicitacao, this.datainicial, this.datafinal
      , this.autor, this.reu, this.tipoperido, this.iduf, this.idbanca, this.proclocalizacao
    ).subscribe(solicitacao => {
      this.solicitacao = solicitacao;
    });

    // Seta para campos vazios conforme a ccondição
    if (this.autor.length > 2) {
      this.reu = '';
    } else if (this.reu.length > 2) {
      this.autor = '';
    } else {
      this.reu = '';
      this.autor = '';
    }

  }



  trazUnica() {
    this.idbusca = JSON.stringify(this.formpadrao.value.numero);
    this.solicitacaoservico.getUnicaSolicitacao(this.idbusca).subscribe(solicitacao => {
      this.solicitacao = solicitacao;
      // console.log(JSON.stringify(this.solicitacao));
      //  this.show(this.soliunica);
    });

    // Seta para campos vazios conforme a ccondição
    if (this.autor.length > 2) {
      this.reu = '';
    } else if (this.reu.length > 2) {
      this.autor = '';
    } else {
      this.reu = '';
      this.autor = '';
    }

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

  selectSolicitacao(solicitacao: Solicitacao) {
    //
    this.messageService.add({ key: 'msg1', severity: 'info', summary: 'Solicitação', detail: 'ID: ' + solicitacao.id });
  }

  /**Taz unica solictacao
   *
   */
  selecionaUnica() {
    this.idsolicitacao = this.formpadrao.value.numero;
    this.solicitacaoservico.getUnicaSolicitacao(this.idsolicitacao).subscribe(solicitacao => {
      this.solicitacao = solicitacao;
      console.log(this.solicitacao);
      this.messageService.add({ key: 'msg1', severity: 'info', summary: 'Solicitação', detail: 'ID: ' + solicitacao });
    });
  }



  /**
   * Mostra as soictações
   *
   */

  show(soli: Solicitacao) {

    this.dialog.open(SoliunicaComponent, {
      data: { id: soli },
      header: 'DETALHES DA SOLICITAÇÃO',
      width: '90%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto', 'style': 'background-color: #F5F5DC;' }
    });

  }


}
