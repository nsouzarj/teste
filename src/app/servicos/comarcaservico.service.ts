import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Comarca, Uf } from '../models/model.geral';
import { BANCO } from '../apiconexao';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

const httpOptions = {
  // tslint:disable-next-line:max-line-length
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})


export class ComarcaservicoService {

  private url1 = BANCO + '/comarcas';
  private url2 = BANCO + '/uf';
  private url3 = BANCO + '/comarca/porestado/';
  private url4 = BANCO + '/comarca/salvar';



  constructor(private http: HttpClient, private messageService: MessageService) {
    console.log('Entrei no sergiço do REST');

  }

  // Pega as comarcas
  getComarcas(): Observable<any> {
    return this.http.get<Comarca[]>(this.url1, httpOptions).pipe(
      catchError(this.handleError('comarcas', []))
    );
  }



  getUf(): Observable<any> {
    return this.http.get<Uf[]>(this.url2, httpOptions).pipe(
      catchError(this.handleError('uf', []))
    );
  }

  // Pega por estado as comarcas
  getUfporEstado(uf: any): Observable<any> {
    return this.http.get<Uf[]>(this.url3 + uf.iduf, httpOptions).pipe(
      catchError(this.handleError('uf', []))
    );
  }

  // Salva as comarcas
  salvarComarca(comarca: any): Observable<any> {
    console.log('DE NOVO' + JSON.stringify(comarca));
    return this.http.post<any>(this.url4, JSON.stringify(comarca), httpOptions).pipe(
      catchError(this.handleError('comarca', []))
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


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ComarcaservicoService: ${message}');
  }

}
