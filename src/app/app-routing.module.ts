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

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona rota vazia para `/home`
  { path: '404', component: Error404Component }, // Página de erro 404
  { path: 'v/:id', component: VComponent }, // Rota dinâmica com parâmetro `id`
  { path: 'social/perfil', component: SocialPerfilComponent }, // Rota dinâmica com parâmetro `id`
  { path: 'home', component: HomeComponent },

  /************* Benancib */
  { path: 'livros', component: LivrosComponent },

  /************* Benancib */
  { path: 'benancib', component: HomeBenancibComponent },

  /************* Eventos */
  { path: 'proceedings', component: MainProcceedingsComponent },
  { path: 'proceedings/issues/:id', component: ProcceedingsIDComponent },

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
