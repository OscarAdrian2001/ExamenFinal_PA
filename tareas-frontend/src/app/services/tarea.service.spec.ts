import { TestBed } from '@angular/core/testing';
import { TareaService } from './tarea.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TareaService', () => {

  let service: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(TareaService);
  });

  it('Debe crearse correctamente el servicio', () => {

    // Arrange
    const resultado = service;

    // Act
    const existe = resultado;

    // Assert
    expect(existe).toBeTruthy();

  });

});
