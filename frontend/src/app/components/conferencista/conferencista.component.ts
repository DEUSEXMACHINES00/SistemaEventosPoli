import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Global } from '../../services/global'
import { Router,ActivatedRoute,Params } from "@angular/router";
import { Asistent } from '../../models/asistent';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-conferencista',
  templateUrl:'../asistentes/asistentes.component.html',
  styleUrls: ['./conferencista.component.css'],
  providers:[EventosService]
})
export class ConferencistaComponent implements OnInit {

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
    this.title = "Crear Conferencistas ";
    this.entidad="conferencista";
   }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.id = params.id;
    });
  }

  onSubmit(form :any){
    //Guardar conferencista en evento    
    console.log(this.asistent)
    this._eventosService.saveConferencist(this.asistent,this.id).subscribe(
      
      response =>{
        
        if(response.conferencist){
          this.status = 'succes';
          form.reset();

        }else{
          this.status ='failed';
        }        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
