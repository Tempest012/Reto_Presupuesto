import { Injectable } from '@angular/core';
import { Egreso } from '../component/egreso/egreso.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  
  
  egreso: Egreso[] = [
    new Egreso('Renta Depto', 900),
    new Egreso('Ropa', 200)
  ];

  obtenerEgresos(): Egreso[] {
    return this.egreso;
  }
}
