import { BancaProcesso } from './../models/model.geral';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BANCO } from '../apiconexao';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class BancaservicoService {
  private url1 = BANCO + '/bancas';
  private url2 = BANCO + '/bancas/salvar';
  messageService: any;
  bancas: BancaProcesso[];
  constructor(private http: HttpClient) {

  }

  getBancas(): Observable<any> {
    return this.http.get<BancaProcesso[]>(this.url1, httpOptions).pipe(
      catchError(this.handleError('bancas', []))
    );
  }

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

  salvarBancas(banca: any): Observable<any> {
    return this.http.post<any>(this.url2, JSON.stringify(banca), httpOptions).pipe(
      catchError(this.handleError('banca', [])
      ));

  }



  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('BancaservicoService: ${message}');
  }




}
