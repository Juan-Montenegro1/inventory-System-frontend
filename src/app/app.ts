import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListado } from "./producto-listado/producto-listado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductoListado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('inventario-app');
}
