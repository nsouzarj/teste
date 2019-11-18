import { Uf } from './../models/model.geral';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BANCO } from '../apiconexao';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SevicoufService {
  private url1 = BANCO + '/uf';

  constructor(private http: HttpClient, private messageService: MessageService) { }
  getUf(): Observable<any> {
    return this.http.get<Uf>(this.url1, httpOptions).pipe(
      catchError(this.handleError('getUf', []))
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
    this.messageService.add('SevicoufService: ${messageService}');
  }


}
