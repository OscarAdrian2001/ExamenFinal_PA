import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroTarea } from './registro-tarea';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistroTarea', () => {

  let component: RegistroTarea;
  let fixture: ComponentFixture<RegistroTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegistroTarea,
        HttpClientTestingModule  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroTarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ser inválido si el título está vacío', () => {

    // Arrange
    component.formulario.setValue({
      titulo: '',
      descripcion: 'Prueba',
      fechaLimite: '2026-02-12',
      prioridad: 'Alta',
      estado: 'Pendiente'
    });

    // Act
    const esValido = component.formulario.valid;

    // Assert
    expect(esValido).toBeFalse();

  });

  

});
