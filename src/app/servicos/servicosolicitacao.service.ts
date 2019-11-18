import { BANCO } from './../apiconexao';
import { Solicitacao, Usuario, Status, Uf, Comarca, BancaProcesso, Correspondente, Orgao } from './../models/model.geral';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ServicosolicitacaoService {
  Soli: any;
  private url1 = BANCO + '/solicitacao/todas';
  private url2 = BANCO + '/solicitacao/';
  private urlusu = BANCO + '/usuarios';
  private urlstatus = BANCO + '/status';
  private urlbancas = BANCO + '/bancas';
  private urlcolaborador = BANCO + '/colaborador';
  private urlcomarca = BANCO + '/comarca';
  private urluf = BANCO + '/uf';
  private urlorgao = BANCO + '/orgao';
  private urlporestado = BANCO + '/comarca/porestado/';
  private urlporfiltro = BANCO + '/solicitacao/filtro/';
  private urlporfiltrounica = BANCO + '/solicitacao/unica/';

  constructor(private http: HttpClient, private messageService: MessageService) {
    console.log('Entrei no sergiço do REST');

  }

  /**
   * Pega todas as solicitações
   */

  getSolicitacoes(): Observable<any> {
    return this.http.get<Solicitacao>(this.url1, httpOptions).pipe(
      catchError(this.handleError('getSolicitacoes', []))
    );
  }

  /**
   * Aqui pega a unica solictacao
   */
  getUnicaSolicitacao(id: Number): Observable<any> {
    return this.http.get<Solicitacao[]>(this.urlporfiltrounica + id, httpOptions).pipe(

      catchError(this.handleError('getUnicaSolicitacao', []))
    );
  }

  // Pega  os usuarios
  getUsuarioAtivo(): Observable<any> {
    return this.http.get<Usuario[]>(this.urlusu, httpOptions).pipe(
      catchError(this.handleError('getUsuarios', []))
    );

  }

  // Pega o status
  getStatus(): Observable<any> {
    return this.http.get<Status[]>(this.urlstatus, httpOptions).pipe(
      catchError(this.handleError('getSatus', []))
    );

  }



  // Pega todas as comarcas
  getComarcas(): Observable<any> {
    return this.http.get<Comarca[]>(this.urlcomarca, httpOptions).pipe(
      catchError(this.handleError('comarcas', []))
    );
  }

  // Pega as bancas
  getBancas(): Observable<any> {
    return this.http.get<BancaProcesso[]>(this.urlbancas, httpOptions).pipe(
      catchError(this.handleError('colaborador', []))
    );
  }

  // Pega a uf
  getUf(): Observable<any> {
    return this.http.get<Uf[]>(this.urluf, httpOptions).pipe(
      catchError(this.handleError('uf', []))
    );
  }

  // Pega a uf
  getOrgao(): Observable<any> {
    return this.http.get<Orgao[]>(this.urlorgao, httpOptions).pipe(
      catchError(this.handleError('orgao', []))
    );
  }


  // Pega por estado as comarcas
  getUfporEstado(uf: any): Observable<any> {
    return this.http.get<Comarca[]>(this.urlporestado + uf.id, httpOptions).pipe(
      catchError(this.handleError('uf', []))
    );
  }
  // Traz os colaboradores

  getColaborador(): Observable<any> {
    return this.http.get<Correspondente[]>(this.urlcolaborador, httpOptions).pipe(
      catchError(this.handleError('colaborador', []))
    );
  }

  /**
   * Busca solicitacaos passando os parametros
   */
  getSolicitaco(numero: Number, numprocesso: String, correspondente: Number, idusuario: Number,
    numerointegracao: String, comarca: Number, orgao: Number, status: Number, tiposolicitacao: any,
    datainicial: Date, datafinal: Date, autor: any, reu: any, tipoperido: Number,
    estado: Number, bancabusca: Number, proclocalizacao: String) {


    return this.http.get<Solicitacao[]>(this.urlporfiltro + numero + '/' + numprocesso + '/' + correspondente + '/' + idusuario
      + '/' + numerointegracao + '/' + comarca + '/' + orgao + '/' + status
      + '/' + tiposolicitacao + '/' + datainicial + '/' + datafinal + '/' +
      autor + '/' + reu + '/' + tipoperido + '/' + estado + '/' + bancabusca + '/' + proclocalizacao, httpOptions
    ).pipe(
      catchError(this.handleError('getSolicitacao', []))
    );

  }

  /*
  Busca a unica
  */




  private handleError<T>(operation = 'operação', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log('${operation} failed: ${error.message}');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ServicosolicitacaoService: ${messageService}');
  }

}
