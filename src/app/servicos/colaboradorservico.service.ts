import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Correspondente } from '../models/model.geral';
import { BANCO } from '../apiconexao';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ColaboradorservicoService {
  private url1 = BANCO + '/colaborador';
  messageService: any;
  constructor(private http: HttpClient) {
    console.log('Entrei no sergiço do REST');


  }

  getColaborador(): Observable<any> {
    return this.http.get<Correspondente[]>(this.url1, httpOptions).pipe(
      catchError(this.handleError('colaborador', []))
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
    this.messageService.add('HeroService: ${message}');
  }
}
