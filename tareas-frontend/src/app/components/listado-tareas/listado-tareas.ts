// Oscar Dominguez
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-tareas.html',
  styleUrl: './listado-tareas.css'
})
export class ListadoTareas {

  @Input() tareas: any[] = [];

}
