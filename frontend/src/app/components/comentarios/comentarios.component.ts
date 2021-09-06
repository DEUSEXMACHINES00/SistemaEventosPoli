import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { EventosService } from '../../services/eventos.service';
import { Global } from '../../services/global'
import { Router,ActivatedRoute,Params } from "@angular/router";

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
  providers:[EventosService]
})
export class ComentariosComponent implements OnInit {

  public url!:string;
  public title!: string;
  public status!: string;
  public comment! : Comment;
  public id!: string;

  constructor(
    private _eventosService : EventosService,
    private _router : Router,
    private _route : ActivatedRoute,
  ) { 
    this.comment = new Comment('','');
    this.url=Global.url;
    this.title = "Crear Comentarios "
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.id = params.id;
    });
  }

  onSubmit(form :any){
    //Guardar comentarios en evento
    this._eventosService.saveComment(this.comment,this.id).subscribe(
      response =>{
      
        if(response.comentario){
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
