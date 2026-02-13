import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { TareaService } from './services/tarea.service';


describe('App', () => {

beforeEach(async () => {

  const mockService = {
    obtenerTareas: () => of([
      { titulo: 'Mock', descripcion: 'Test' }
    ])
  };

  await TestBed.configureTestingModule({
    imports: [
      App,
      HttpClientTestingModule
    ],
    providers: [
      { provide: TareaService, useValue: mockService }
    ]
  }).compileComponents();
});


  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('Debe agregar una tarea al arreglo', () => {

  const fixture = TestBed.createComponent(App);
  const app = fixture.componentInstance;

  // Arrange
  app.tareas = [];

  const nuevaTarea = {
    titulo: 'Test',
    descripcion: 'Probando',
    fechaLimite: '2026-02-12',
    prioridad: 'Alta',
    estado: 'Pendiente'
  };

  // Act
  app.agregarTarea(nuevaTarea);

  // Assert
  expect(app.tareas.length).toBe(1);
});

it('Debe cargar tareas al iniciar', () => {

    // Arrange
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    // Act
    app.ngOnInit();

    // Assert
    expect(app.tareas.length).toBeGreaterThan(0);

  });

});
