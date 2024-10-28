import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { EventoService } from './service/evento.service';
import { EventoRoutingModule } from './evento-routing.module';
import { DarAltaComponent } from './dar-alta/dar-alta.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { ModificarEventosComponent } from './modificar-eventos/modificar-eventos.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ListaEventosComponent],
  imports: [
    CommonModule,
    EventoRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [HttpClient, EventoService],
  bootstrap: [AppComponent]
})
export class EventoModule { }
