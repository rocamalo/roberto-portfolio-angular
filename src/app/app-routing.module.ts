import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// No necesitamos rutas porque nuestra aplicación es de página única,
// pero configuramos el módulo para posible expansión futura
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Configuración para el scroll suave nativo
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 70] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
