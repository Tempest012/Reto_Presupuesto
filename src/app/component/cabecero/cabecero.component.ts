import { Component } from '@angular/core';
import { PresupuestoService } from '../../Service/presupuesto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecero',
  imports: [CommonModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {
  constructor(private presupuestoService: PresupuestoService) {}

  get presupuestoDisponible(): number {
    return this.presupuestoService.presupuestoDisponible;
  }

  get totalIngresos(): number {
    return this.presupuestoService.totalIngresos;
  }

  get totalEgresos(): number {
    return this.presupuestoService.totalEgresos;
  }

  get porcentajeEgresos(): number {
    return this.presupuestoService.porcentajeEgresos;
  }

}
