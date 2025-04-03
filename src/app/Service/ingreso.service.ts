import { Injectable } from '@angular/core';
import { Ingreso } from '../component/ingreso/ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  private ingresos: Ingreso[] = [
    new Ingreso('Salario', 5000),
    new Ingreso('Venta', 1200)
  ];

  obtenerIngresos(): Ingreso[] {
    return this.ingresos;
  }
}
