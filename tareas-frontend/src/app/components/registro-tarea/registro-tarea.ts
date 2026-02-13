// Oscar Dominguez
import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-registro-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-tarea.html',
  styleUrl: './registro-tarea.css'
})
export class RegistroTarea {

  @Output() tareaCreada = new EventEmitter<any>();

  formulario!: FormGroup;   

  constructor(private fb: FormBuilder, private tareaService: TareaService) {
    
    // iniciamos dentro del constructor
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaLimite: ['', Validators.required],
      prioridad: ['', Validators.required],
      estado: ['', Validators.required]
    });

  }

  enviar() {
    if (this.formulario.valid) {
      this.tareaService.registrarTarea(this.formulario.value)
        .subscribe(res => {
          this.tareaCreada.emit(res);
          this.formulario.reset();
        });
    }
  }
}
