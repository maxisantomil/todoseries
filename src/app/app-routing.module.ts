import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriePrincipalseriesComponent } from './serie-principalseries/serie-principalseries.component';
import { SerieNoticiasComponent } from './serie-noticias/serie-noticias.component';
import { SerieInfoComponent } from './serie-info/serie-info.component';

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
  },
  {
    path: 'serie/:id',
    component: SerieInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
