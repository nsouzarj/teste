import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from '../http/authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/model.geral';
import { ServicologinService } from '../servicos/servicologin.service';



@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {
  items: MenuItem[];
  currentUser: User;
  usuario: any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService, private servicologout: ServicologinService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.usuario = this.authenticationService.usuario;
  }

  ngOnInit() {

    this.items = [
      {
        label: 'Cadastros',
        icon: 'pi  pi-home',


        items: [{
          label: 'Prestadores',
          icon: 'pi pi-users',
          routerLink: ['/colaboradores'], routerLinkActiveOptions: ['active:true']

        },
        { label: 'Comarcas', icon: 'pi pi-paperclip', routerLink: ['/comarcas'], routerLinkActiveOptions: ['active:true'] },
        { label: 'Responsáveis', icon: 'pi pi-star', routerLink: ['/bancas'], routerLinkActiveOptions: ['active:true'] },
        { label: 'Usuários', icon: 'pi pi-fw pi-user-plus', routerLink: ['/usuarios'], routerLinkActiveOptions: ['active:true'] }]
      },
      {
        label: 'Serviços', icon: 'pi pi-file',
        items: [{ label: 'Nova', icon: 'pi pi-pencil', routerLink: ['/cadprocessos'], routerLinkActiveOptions: ['active:true'] },
        { label: 'Listagem', icon: 'pi pi-list', routerLink: ['/solicitacoes'], routerLinkActiveOptions: ['active:true'] }

        ]
      }, { label: 'Gráficos', icon: 'pi  pi-chart-bar', routerLink: ['/grafico'], routerLinkActiveOptions: ['active:true'] },
      { label: 'Sair', icon: 'pi pi-sign-out', routerLink: ['/'], }];

  }


  logout() {
    this.authenticationService.logout();
    this.servicologout.logout();
    this.router.navigate(['/login']);
  }

}
