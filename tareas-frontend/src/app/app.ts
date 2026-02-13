
// Oscar Dominguez
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroTarea } from './components/registro-tarea/registro-tarea';
import { ListadoTareas } from './components/listado-tareas/listado-tareas';
import { TareaService } from './services/tarea.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RegistroTarea, ListadoTareas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  tareas: any[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareaService.obtenerTareas()
      .subscribe(data => this.tareas = data);
  }

  agregarTarea(tarea: any) {
    this.tareas.push(tarea);
  }
}
