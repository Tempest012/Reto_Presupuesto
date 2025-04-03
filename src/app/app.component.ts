import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from './component/cabecero/cabecero.component';
import { EgresoComponent } from './component/egreso/egreso.component';
import { IngresoComponent } from './component/ingreso/ingreso.component';
import { FormularioComponent } from './component/formulario/formulario.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceroComponent, EgresoComponent, IngresoComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reto_App_Presupuesto';
}
