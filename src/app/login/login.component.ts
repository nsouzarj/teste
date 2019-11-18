import { Usuario } from './../models/model.geral';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServicologinService } from '../servicos/servicologin.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../http/authentication.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../http/alert.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService, FormBuilder],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .ui-message,
        :host ::ng-deep .ui-inputtext {
            margin-right: .25em;
        }
    `]
})
export class LoginComponent implements OnInit {

  @Input() acessovalido: boolean;

  loginForm: FormGroup;
  msgs: Message[] = [];
  login: String;
  senha: String;
  autenticado: any;
  usuario: any;
  auth: any;
  loading = false;
  submitted = false;
  returnUrl: string;

  // tslint:disable-next-line:max-line-length
  constructor(private alertService: AlertService,
    private rotalocal: Router, private messageService: MessageService,
    private rota: ServicologinService, private novo: AuthenticationService) { }

  meuForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  ngOnInit() {

  }

  // Autentica pelo sergico de usuario
  loginUsario() {
    this.rota.login(this.meuForm.value.login, this.meuForm.value.senha).subscribe(usuario => {
      this.usuario = usuario;
      if (this.usuario.emailprincipal === this.meuForm.value.login) {
        this.rotalocal.navigate(['menu']);
      } else {
        this.showError();
      }
    });
  }

  // Autentica pelo banco de dados
  loginBanco() {
    this.loading = true;
    // tslint:disable-next-line:no-unused-expression

    this.novo.login(this.meuForm.value.login, this.meuForm.value.senha).pipe(first()).subscribe(
      data => {
        this.rotalocal.navigate(['menu']);
      }, error => { this.showError(); this.alertService.error(error); this.loading = false; });
  }





  showInfo() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Info ', detail: 'PrimeNG rocks' });
  }
  showError() {
    this.msgs = [];
    this.msgs.push({ key: 'msg1', severity: 'error', summary: 'Error ', detail: 'Login falhou' });
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  showSuccess() {
    this.messageService.add({ key: 'msg1', severity: 'success', summary: 'Successo', detail: 'Show acessou' });
  }


}
