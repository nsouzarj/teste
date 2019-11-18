import { NumberValueAccessor } from '@angular/forms/src/directives';

// interface de Correspondente
export interface Correspondente {
  id: Number;
  nome: String;
  oab: String;
  emailprimario: String;
  telefoneprimario: String;
  telefonecelularprimario: String;

}

// Interface de UF
export interface Uf {
  id: Number;
  sigla: String;
  nome: String;
}
export interface Orgao {
 idorgao: Number;
 descricao: String;
}
// Interface Usauio
export interface Usuario {
  id: Number;
  login: String;
  senha: String;
  nomecompleto: String;
  emailprincipal: String;
  ativo: boolean;
  tipo: Number;
  token: String;

}

// Interface de Comarcas
export interface Comarca {
  id: Number;
  nome: String;
  uf: Uf;
}

// Interface de Estus
export interface Status {
  id: Number;
  status: String;
}


// Interface Bancas
export interface BancaProcesso {
  id: Number;
  banca: String;
  descricao: String;
  ativa: boolean;
  email: String;
  emailgestordabanca: String;
}
// interface da solicitacao
export interface Solicitacao {
  id: String;
  referenciasolicitacao: String;
  datasolictacao: Date;
  dataconclusao: Date;
  dataprazo: String;
  observacao: String;
  instrucoes: String;
  complemento: String;
  justificativa: String;
  tratposaudiencia: String;
  numcontrole: String;
  tempreposto: boolean;
  convolada: boolean;
  horaudiencia: String;
  statusexterno: String;
  processo: String;
  renumeracao: String;
  statussolicitacao: String;
  comarca: String;
  formularioAudiencia?: String;
  bancaProcesso: String;
  enviosolicitacao: String;
  reciboPagamento: String;
  usuario: String;
  auditoriaInterna: String;
  valor: BigInteger;
  valordaalcada: String;
  emailenvio?: String;
  pago: String;
  grupo: String;
  propostaacordo: boolean;
  audinterna: boolean;

}


/**
 *  { field: 'idsolicitacao', header: 'ID' },
      { field: 'processo', header: 'Processo' },
      { field: 'datasolicitacao', header: 'DataPrazo' },
      { field: 'usuario', header: 'Usuario' },
      { field: 'valor', header: 'Valor' }];


 *
 */



export class AuthLoginInfo {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}



export class SignUpInfo {
  name: string;
  username: string;
  email: string;
  role: string[];
  password: string;

  constructor(name: string, username: string, email: string, password: string) {
      this.name = name;
      this.username = username;
      this.email = email;
      this.password = password;
      this.role = ['user'];
  }
}





export class JwtResponse {
    accessToken: string;
    type: string;
    username: string;
    authorities: string[];
}

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
