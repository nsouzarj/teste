import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { TooltipModule } from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './chart/chart.component';
import { ROUTES } from './app.rotas';
import { PaginainexistesteComponent } from './paginainexisteste/paginainexisteste.component';
import { ComarcasComponent } from './comarcas/comarcas.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { BancasComponent } from './bancas/bancas.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { registerLocaleData } from '@angular/common';
import br from '@angular/common/locales/br';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { SoliunicaComponent } from './solicitacoes/soliunica/soliunica.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './http/error.interceptor';
import { JwtInterceptor } from './http/jwt.interceptor';
import { AlertComponent } from './alerta/alert/alert.component';
import { CadastrocomarcaComponent } from './comarcas/cadastro/cadastrocomarca/cadastrocomarca.component';
import { CadastrocolaboradorComponent } from './colaboradores/cadastrocolaborador/cadastrocolaborador.component';
import { CalendarModule } from 'primeng/calendar';
import { FormbaseComponent } from './shared/formbase/formbase.component';
import { ProgressBarModule } from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadastrodebancasComponent } from './bancas/cadastrodebancas/cadastrodebancas.component';
import { ProcessosComponent } from './processos/processos.component';
import { CadprocessosComponent } from './processos/cadprocessos/cadprocessos.component';

library.add(faCoffee);

registerLocaleData(br, 'pt-BR');
@NgModule({
  declarations: [
    MenuprincipalComponent,
    ChartComponent,
    PaginainexistesteComponent,
    ComarcasComponent,
    ColaboradoresComponent,
    BancasComponent,
    SolicitacoesComponent,
    LoginComponent,
    BemvindoComponent,
    SoliunicaComponent,
    AlertComponent,
    CadastrocomarcaComponent,
    CadastrocolaboradorComponent,
    FormbaseComponent,
    UsuariosComponent,
    CadastrodebancasComponent,
    ProcessosComponent,
    CadprocessosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule,
    MenubarModule,
    MenuModule,
    FileUploadModule,
    PanelModule,
    PanelMenuModule,
    TooltipModule,
    ChartModule,
    TableModule,
    PasswordModule,
    DynamicDialogModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    DropdownModule,
    ToolbarModule,
    RadioButtonModule,
    CalendarModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true }),
  ],
  entryComponents: [
    SoliunicaComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],

  bootstrap: [BemvindoComponent]
})
export class AppModule { }
