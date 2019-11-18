import { AuthLoginInfo, JwtResponse, User } from './../models/model.geral';
import { BANCO } from './../apiconexao';
import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Router } from '@angular/router';



const httpOptions = {
  // tslint:disable-next-line:max-line-length
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})


export class ServicologinService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private rotalocal: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }



  private url1 = BANCO + '/usuariologin/';
  private url2 = BANCO + '/login';
  autenticado: boolean;
  messageService: any;
  model: any = {};
  conta: any;
  usuario: any;
  logado: boolean;
  valido: Number;
  user: any;
  // Loga sem abrir sessao no servidor
  login(email: String, senha: String): Observable<any> {

    this.model.username = email;
    this.model.password = senha;
    this.conta = { username: this.model.username, password: this.model.password };
    console.log(this.model.username + '-' + this.model.password);



    return this.http.get<any>(this.url1 + email + '/' + senha, httpOptions).pipe(
      catchError(this.handleError('senha', []))
    );
  }




  loginbanco(email: String, senha: String) {


    // tslint:disable-next-line:max-line-length
    this.http.post<Observable<boolean>>(`${this.url2}`, JSON.stringify({ username: email, password: senha }), httpOptions).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          window.btoa(email + ':' + senha)
        );
        alert('Authentication .');
      } else {
        alert('Authentication failed.');
        // this.rotalocal.navigate(['menu']);
      }
    });
  }

  // Sando com o JWT para autenticação
  login3(email: string, senha: string) {
    return this.http.post<any>(`${this.url2}`, { email, senha })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          console.log('Usuario' + user);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        console.log('Usuario' + this.user);
        return user;
      }));
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

  logout() {
    return this.http.post<any>('http://www.nsouza.eti.br/api/public/api/closed', '');
  }


}


