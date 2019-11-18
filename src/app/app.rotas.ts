import { CadprocessosComponent } from './processos/cadprocessos/cadprocessos.component';
import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { LoginComponent } from './login/login.component';
import { BancasComponent } from './bancas/bancas.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ComarcasComponent } from './comarcas/comarcas.component';
import { PaginainexistesteComponent } from './paginainexisteste/paginainexisteste.component';
import { ChartComponent } from './chart/chart.component';
import { Routes } from '@angular/router';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { CadastrocomarcaComponent } from './comarcas/cadastro/cadastrocomarca/cadastrocomarca.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadastrodebancasComponent } from './bancas/cadastrodebancas/cadastrodebancas.component';
// Rotas do sistema
export const ROUTES: Routes = [
  { path: '', component: BemvindoComponent },
  { path: 'bemvindo', component: BemvindoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuprincipalComponent },
  { path: 'grafico', component: ChartComponent },
  { path: 'comarcas', component: ComarcasComponent },
  { path: 'comarcas/cadastro', component: CadastrocomarcaComponent},
  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: 'bancas', component: BancasComponent },
  { path: 'cadastrodebancas', component: CadastrodebancasComponent},
  { path: 'cadprocessos', component: CadprocessosComponent},
  { path: 'solicitacoes', component: SolicitacoesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '**', component: PaginainexistesteComponent }

];
