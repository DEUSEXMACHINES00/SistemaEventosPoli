import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { Comment } from "../../models/comment";
import { Asistent } from "../../models/asistent";
import { EventosService } from '../../services/eventos.service';
import { Global } from '../../services/global'
import { Router,ActivatedRoute,Params } from "@angular/router";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
  providers:[EventosService]
})
export class EventoComponent implements OnInit {

  public url!: string;
  public event!:Event;
  public headers!: string[];
  public headers1!: string[];
  public comentarios! : Comment[];
  public asistentes! : Asistent[];
  public conferencistas!: Asistent[];

  constructor(
    private _router : Router,
    private _route : ActivatedRoute,
    private _eventosService : EventosService
  ) { 
    
    this.url=Global.url;
    this.headers =  ['Id usuario.', 'Comentario'];   3
    this.headers1 =  ['Nombre usuario', 'Nombre completo', 'Tipo usuario', 'Email', 'Ciudad', 'Departamento', 'Pais'];   

  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{   
      let id = params.id;
      this.getEvent(id);
    });

  }

  getEvent(id : any){
    this._eventosService.getEvent(id).subscribe(
      response =>{
        this.event = response.event;  
        this.comentarios = response.event.comentarios;
        this.asistentes = response.event.asistentes;
        this.conferencistas = response.event.conferencistas;
        
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
