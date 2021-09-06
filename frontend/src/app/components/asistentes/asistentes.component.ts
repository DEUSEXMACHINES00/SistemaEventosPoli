import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Global } from '../../services/global'
import { Router,ActivatedRoute,Params } from "@angular/router";
import { Asistent } from '../../models/asistent';

@Component({
  selector: 'app-asistentes',
  templateUrl: './asistentes.component.html',
  styleUrls: ['./asistentes.component.css'],
  providers:[EventosService]
})
export class AsistentesComponent implements OnInit {

  public url!:string;
  public title!: string;
  public status!: string;
  public asistent! : Asistent;
  public id!: string;
  public entidad! : string;


  constructor(
    private _eventosService : EventosService,
    private _router : Router,
    private _route : ActivatedRoute,
  ) { 
    this.asistent= new Asistent('','','','','',{nombre:'',departamento:'',pais:''})
    this.url=Global.url;
    this.title = "Crear Asistentes ";
    this.entidad="asistente";
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.id = params.id;
    });
  }

  onSubmit(form :any){
    //Guardar asistente en evento
    this._eventosService.saveAsistant(this.asistent,this.id).subscribe(
      response =>{
      
        if(response.asistente){
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
