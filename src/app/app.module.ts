import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { FormsModule } from '@angular/forms';
import { SerieCarritoComponent } from './serie-carrito/serie-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListComponent,
    SerieCarritoComponent,
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
