import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieFavoritasComponent } from './serie-favoritas/serie-favoritas.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListComponent,
    SerieFavoritasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
