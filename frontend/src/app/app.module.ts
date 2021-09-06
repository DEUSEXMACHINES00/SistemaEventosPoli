import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing , appRoutingProviders } from "./app.routing";
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { EventosOrganizadoresComponent } from './components/eventos-organizadores/eventos-organizadores.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { ConsultarEventosComponent } from './components/consultar-eventos/consultar-eventos.component';
import { ErrorComponent } from './components/error/error.component';
import { EventoComponent } from './components/evento/evento.component';
import { ConferencistaComponent } from './components/conferencista/conferencista.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosOrganizadoresComponent,
    AsistentesComponent,
    ComentariosComponent,
    ConsultarEventosComponent,
    ErrorComponent,
    EventoComponent,
    ConferencistaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
