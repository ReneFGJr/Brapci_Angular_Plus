import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './020_brapci/page/error404/error404.component';
import { HomeComponent } from './020_brapci/page/home/home.component';
import { VComponent } from './020_brapci/page/v/v.component';
import { SocialPerfilComponent } from './020_brapci/page/social/perfil/perfil.component';
import { HomeBenancibComponent } from './020_brapci/page/benancib/benancib.component';
import { MainProcceedingsComponent } from './020_brapci/page/procceedings/procceedings.component';
import { ProcceedingsIDComponent } from './020_brapci/page/procceedings-id/procceedings-id.component';
import { LivrosComponent } from './020_brapci/page/livros/livros.component';
import { JournalsComponent } from './020_brapci/page/journals/journals.component';
import { AuthorityComponent } from './020_brapci/page/authority/authority.component';
import { TimelineComponent } from './020_brapci/page/timeline/timeline.component';
import { AboutComponent } from './020_brapci/page/about/about.component';
import { IndexAuthorsComponent } from './020_brapci/page/index-authors/index-authors.component';
import { BasketSelectedComponent } from './020_brapci/page/basket-selected/basket-selected.component';
import { VExportComponent } from './020_brapci/page/v-export/v-export.component';
import { IndexSubjectsComponent } from './020_brapci/page/index-subjects/index-subjects.component';
import { ToolsComponent } from './930_tools/tools/tools.component';
import { ToolsMenuComponent } from './930_tools/tools/menu/menu.component';
import { Txt4netComponent } from './930_tools/tools/txt4net/txt4net.component';
import { Term4netComponent } from './930_tools/tools/term4net/term4net.component';
import { MainAuthComponent } from './001_auth/page/main-auth/main-auth.component';
import { Txt4matrixComponent } from './930_tools/tools/txt4matrix/txt4matrix.component';
import { ScreenSaverComponent } from './100_screensaver/screen-saver/screen-saver.component';
import { MainAdminMenuComponent } from './030_admin/main-admin-menu/main-admin-menu.component';
import { MainAdminRdfEditComponent } from './030_admin/main-admin-rdf-edit/main-admin-rdf-edit.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona rota vazia para `/home`
  { path: '404', component: Error404Component }, // Página de erro 404
  { path: 'v/:id', component: VComponent }, // Rota dinâmica com parâmetro `id`
  { path: 'v/:id/:format', component: VExportComponent }, // Rota dinâmica com parâmetro `id`
  { path: 'social/perfil', component: SocialPerfilComponent }, // Rota dinâmica com parâmetro `id`
  { path: 'home', component: HomeComponent },

  { path: 'screensaver', component: ScreenSaverComponent },

  { path: 'basket/selected', component: BasketSelectedComponent },

  /************************ Social Auth */
  { path: 'social/:action', component: MainAuthComponent },

  /************************ Admin */
  { path: 'admin', component: MainAdminMenuComponent },
  { path: 'admin/:action', component: MainAdminMenuComponent },
  { path: 'admin/:action/:id', component: MainAdminMenuComponent },

  /************* Benancib */
  { path: 'about/:id', component: AboutComponent },
  { path: 'indexs/:id', component: AboutComponent },
  { path: 'indexs/author/:id', component: IndexAuthorsComponent },
  { path: 'indexs/subject/:id', component: IndexSubjectsComponent },

  { path: 'timeline', component: TimelineComponent },

  /************* Benancib */
  { path: 'livros', component: LivrosComponent },

  /************* Benancib */
  { path: 'authority', component: AuthorityComponent },

  /************* Benancib */
  { path: 'benancib', component: HomeBenancibComponent },

  /************* Journals */
  { path: 'journals', component: JournalsComponent },

  /************* Eventos */
  { path: 'proceedings', component: MainProcceedingsComponent },
  { path: 'proceedings/issues/:id', component: ProcceedingsIDComponent },

  {
    path: 'tools',
    component: ToolsComponent,
    children: [
      { path: '', component: ToolsMenuComponent },
      { path: 'txt4net', component: Txt4netComponent },
      { path: 'term4net', component: Term4netComponent },
      { path: 'txt4matrix', component: Txt4matrixComponent },
    ],
  },

  /************* OAI EDITOR */
  {
    path: 'oaieditor',
    loadChildren: () =>
      import('./960_oai_editor/oaieditor/oaieditor.module').then(
        (m) => m.OaieditorModule
      ),
  },

  /************* Erro 404 */
  { path: '**', redirectTo: '/404' }, // Redireciona rotas não definidas para a página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
