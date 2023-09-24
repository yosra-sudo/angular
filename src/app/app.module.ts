import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListeFournisseurComponent } from './liste-fournisseur/liste-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    ListeFournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
