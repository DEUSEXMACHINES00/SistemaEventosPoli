import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { EventosService } from '../../services/eventos.service';
import { Global } from '../../services/global'

@Component({
  selector: 'app-eventos-organizadores',
  templateUrl: './eventos-organizadores.component.html',
  styleUrls: ['./eventos-organizadores.component.css'],
  providers:[EventosService]
})
export class EventosOrganizadoresComponent implements OnInit {

  public event! : Event;
  public url!:string;
  public title!: string;
  public status!: string;

  constructor(
    private _eventoServicio : EventosService
  ) { 
    this.event = new Event('' ,'','',[],'','',{nombre:'',direccion:'',ciudad:''},'','',);
    this.url=Global.url;
    this.title = "Crear Eventos";
  }

  ngOnInit(): void {
  }

  onSubmit(form :any){
    //Guardar datos
    this._eventoServicio.saveEvent(this.event).subscribe(
      response =>{
      
        if(response.event){
          this.status = 'succes';
          form.reset();

        }else{
          this.status ='failed';
        }        
      },
      error => {
        console.log("error:"+<any>error);
      }
    );
  }


  


}
