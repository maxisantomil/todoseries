import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriePrincipalseriesComponent } from './serie-principalseries/serie-principalseries.component';
import { SerieNoticiasComponent } from './serie-noticias/serie-noticias.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'series',
    pathMatch: 'full'
  },
  {
    path: 'series',
    component: SeriePrincipalseriesComponent
  },
  {
    path: 'noticias',
    component: SerieNoticiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
