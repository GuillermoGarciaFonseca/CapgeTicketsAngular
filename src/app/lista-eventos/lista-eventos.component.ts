import { Component, OnInit } from '@angular/core';
import { Evento } from '../model/evento.model';
import { Router } from '@angular/router';
import { EventoService } from '../service/evento.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html', 
  styleUrl: './lista-eventos.component.scss'
})
export class ListaEventosComponent implements OnInit  {
  eventos: Evento[] = [];
 
  constructor(private router: Router, private eventoService: EventoService,  private dialog: MatDialog) {}
 
  ngOnInit(): void {
   this.listarEventos();
  }
 
  listarEventos  (){
    this.eventoService.getEventos().subscribe((data) => {
      if(data){
        this.eventos=data;
      }
    });
  }
  deleteEvento(evento: Evento): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eventoService.deleteEvento(evento).subscribe(
          (data) => {
            this.eventos = this.eventos.filter((e) => e !== evento);
          },
          error => {
            console.error('Error al eliminar el evento:', error);
          }
        );
      }
    });
    
  }
}