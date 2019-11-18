import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../models/model.geral';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BANCO } from '../apiconexao';
import { MessageService } from './message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServicousuarioService {

  private url1 = BANCO + '/usuarios';



  constructor(private http: HttpClient, private messageService: MessageService) { }
  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url1, httpOptions).pipe(
      catchError(this.handleError('getUsuario', []))
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
