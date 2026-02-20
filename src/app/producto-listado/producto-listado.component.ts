import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-listado',
  imports: [],
  templateUrl: './producto-listado.component.html',
})
export class ProductoListado {
  productos!: Producto[];

  private productoService = inject(ProductoService);

  ngOnInit(){
    //CARGAR PRODUCTOS
    this.obtenerProductos();
  }

  private obtenerProductos(): void{
    this.productoService.obtenerProductosLista().subscribe(
      {
        next: (datos) => {
          this.productos = datos;
        },
        error: (error) => {
          console.log("Error al obtener los productos: " + error);
        }
      }
    );
  }
}
