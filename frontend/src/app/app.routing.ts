import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventosOrganizadoresComponent } from './components/eventos-organizadores/eventos-organizadores.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { ConsultarEventosComponent } from './components/consultar-eventos/consultar-eventos.component';
import { EventoComponent } from './components/evento/evento.component';
import { ConferencistaComponent } from './components/conferencista/conferencista.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes : Routes  = [
    {path:'' , component: ConsultarEventosComponent},
    {path:'registrareo' , component: EventosOrganizadoresComponent},
    {path:'consultar' , component: ConsultarEventosComponent},
    {path:'registrarAsistentes/:id' , component: AsistentesComponent},
    {path:'registrarComentarios/:id' , component: ComentariosComponent },
    {path:'registrarConferencista/:id' , component: ConferencistaComponent },   
    {path:'evento/:id' , component: EventoComponent },     
    {path:'**' , component: ErrorComponent}
];

export const appRoutingProviders: any [] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);