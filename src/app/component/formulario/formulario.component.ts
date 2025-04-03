import { Component } from '@angular/core';
import { PresupuestoService } from '../../Service/presupuesto.service';
import { CommonModule } from '@angular/common';
import { Egreso } from '../egreso/egreso.model';
import { Ingreso } from '../ingreso/ingreso.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  tipoOperacion: string = 'ingresoOperacion'; // Define si es ingreso o egreso
  descripcion: string = '';
  valor: number = 0;

  constructor(private presupuestoService: PresupuestoService) {}

  agregarOperacion() {
    if (this.descripcion.trim() !== '' && this.valor > 0) {
      if (this.tipoOperacion === 'ingresoOperacion') {
        this.presupuestoService.agregarIngreso(new Ingreso(this.descripcion, this.valor));
      } else {
        this.presupuestoService.agregarEgreso(new Egreso(this.descripcion, this.valor));
      }
      // Limpiar formulario después de agregar
      this.descripcion = '';
      this.valor = 0;
    }
  }
}
