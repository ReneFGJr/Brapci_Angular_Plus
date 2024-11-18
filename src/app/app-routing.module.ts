import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './020_brapci/page/error404/error404.component';
import { HomeComponent } from './020_brapci/page/home/home.component';
import { VComponent } from './020_brapci/page/v/v.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona rota vazia para um padrão (opcional)
  { path: '404', component: Error404Component },
  { path: 'home', component: HomeComponent },
  { path: 'v/:id', component: VComponent }, // Rota para capturar o parâmetro `id`
  { path: '**', redirectTo: '/404' }, // Redireciona rotas não correspondentes para uma página de erro (opcional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
