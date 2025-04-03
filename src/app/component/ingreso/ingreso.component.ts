import { Component } from '@angular/core';
import { IngresoService } from '../../Service/ingreso.service';
import { Ingreso } from './ingreso.model';
import { CommonModule } from '@angular/common';
import { PresupuestoService } from '../../Service/presupuesto.service';


@Component({
  selector: 'app-ingreso',
  imports: [CommonModule],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
  descripcion: string = '';
  valor: number = 0;

  constructor(private presupuestoService: PresupuestoService) {}

  agregarIngreso(): void {
    if (this.descripcion && this.valor > 0) {
      this.presupuestoService.agregarIngreso(new Ingreso(this.descripcion, this.valor));
      this.descripcion = '';
      this.valor = 0;
    }
  }

  eliminarIngreso(ingreso: Ingreso): void {
    this.presupuestoService.eliminarIngreso(ingreso);
  }

  get ingresos() {
    return this.presupuestoService.ingresos;
  }

}
