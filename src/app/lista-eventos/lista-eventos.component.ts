import { Component, OnInit } from '@angular/core';
import { Evento } from '../model/evento.model';
import { Router } from '@angular/router';
import { EventoService } from '../service/evento.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  standalone: true,
  imports: [CommonModule ],
  
  styleUrl: './lista-eventos.component.scss'
})
export class ListaEventosComponent implements OnInit  {
  eventos: Evento[] = [];

  constructor(private router: Router, private eventoService: EventoService) {}
  ngOnInit(): void {
    this.eventoService.getEventos().subscribe((data) => {
      this.eventos = data;
    });
  }

  

}
