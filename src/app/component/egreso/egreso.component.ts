import { Component } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from '../../Service/egreso.service';
import { CommonModule } from '@angular/common';
import { PresupuestoService } from '../../Service/presupuesto.service';

@Component({
  selector: 'app-egreso',
  imports: [CommonModule],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent {
  descripcion: string = '';
  valor: number = 0;

  constructor(private presupuestoService: PresupuestoService) {}

  agregarEgreso(): void {
    if (this.descripcion && this.valor > 0) {
      this.presupuestoService.agregarEgreso(new Egreso(this.descripcion, this.valor));
      this.descripcion = '';
      this.valor = 0;
    }
  }

  eliminarEgreso(egreso: Egreso): void {
    this.presupuestoService.eliminarEgreso(egreso);
  }

  get egresos() {
    return this.presupuestoService.egresos;
  }

}
