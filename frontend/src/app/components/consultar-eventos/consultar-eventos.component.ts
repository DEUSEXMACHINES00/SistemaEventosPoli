import { Component, OnInit } from '@angular/core';
import { Event } from "../../models/event";
import { Global } from "../../services/global";
import { EventosService } from "../../services/eventos.service";

@Component({
  selector: 'app-consultar-eventos',
  templateUrl: './consultar-eventos.component.html',
  styleUrls: ['./consultar-eventos.component.css'],
  providers: [EventosService]
})
export class ConsultarEventosComponent implements OnInit {

  public events! : Event[];
  public url! : String;

  constructor(
    private _eventosService : EventosService
  ) { 
    this.url=Global.url;
  }

  ngOnInit(): void {
    this.getEvents(); 
  }

  getEvents(){
    this._eventosService.getEvents().subscribe(
        response =>{
            
            if(response.events){
              this.events = response. events;
            }
        },
        error =>{
            console.log(<any>error);
        }
    )

  }

}
