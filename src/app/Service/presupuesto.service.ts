import { Injectable } from '@angular/core';
import { Ingreso } from '../component/ingreso/ingreso.model';
import { Egreso } from '../component/egreso/egreso.model';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  get totalIngresos(): number {
    return this.ingresos.reduce((acc, ingreso) => acc + ingreso.valor, 0);
  }

  get totalEgresos(): number {
    return this.egresos.reduce((acc, egreso) => acc + egreso.valor, 0);
  }

  get presupuestoDisponible(): number {
    return this.totalIngresos - this.totalEgresos;
  }

  get porcentajeEgresos(): number {
    return this.totalIngresos > 0 ? (this.totalEgresos / this.totalIngresos) * 100 : 0;
  }

  agregarIngreso(ingreso: Ingreso) {
    this.ingresos.push(ingreso);
  }

  agregarEgreso(egreso: Egreso) {
    this.egresos.push(egreso);
  }

  eliminarIngreso(ingreso: Ingreso) {
    this.ingresos = this.ingresos.filter(i => i !== ingreso);
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresos = this.egresos.filter(e => e !== egreso);
  }}
