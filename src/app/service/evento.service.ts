import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../model/evento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

    url = 'http://localhost:8080/evento/';
  
    constructor(private httpClient: HttpClient) {}
  
    public getEventos(): Observable<Evento[]>{
    return this.httpClient.get<Evento[]>(this.url + 'listarEventos');
    }

    public deleteEvento(evento: Evento) : Observable<any> {
      return this.httpClient.delete<any>(this.url + 'eliminar/' + evento.id);
    }

}
