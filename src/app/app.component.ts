import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, ListaEventosComponent, CommonModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularEvento';
};

