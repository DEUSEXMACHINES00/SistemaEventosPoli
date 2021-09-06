import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http';
import { Event } from '../models/event';
import { Comment } from '../models/comment';
import { Asistent } from "../models/asistent";
import { Global} from './global'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  public url!:string;

  constructor(
    private _http : HttpClient
  ) { 
    this.url = Global.url;
  }

  getEvents(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+"get-events",{headers:headers});
  }

  saveEvent (event: Event): Observable<any>{

    let params = JSON.stringify(event);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'save-event', params, {headers: headers});
  }

  getEvent(id : any) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.get(this.url+'get-event/'+id,{headers:headers});
  }

  saveComment (comment: Comment, id :any): Observable<any>{

    let params = JSON.stringify(comment);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.post(this.url+'save-comment/'+id, params, {headers: headers});
  }

  saveAsistant(asistent: Asistent, id :any): Observable<any>{

    let params = JSON.stringify(asistent);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'save-assistant/'+id, params, {headers: headers});
  }

  saveConferencist(asistent: Asistent, id :any): Observable<any>{

    let params = JSON.stringify(asistent);    
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'save-conferencist/'+id, params, {headers: headers});
  }
  

}
