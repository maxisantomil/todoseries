import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { FormsModule } from '@angular/forms';
import { SerieCarritoComponent } from './serie-carrito/serie-carrito.component';
import { SerieNoticiasComponent } from './serie-noticias/serie-noticias.component';
import { SeriePrincipalseriesComponent } from './serie-principalseries/serie-principalseries.component';
import { SerieInfoComponent } from './serie-info/serie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListComponent,
    SerieCarritoComponent,
    SerieNoticiasComponent,
    SeriePrincipalseriesComponent,
    SerieInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
