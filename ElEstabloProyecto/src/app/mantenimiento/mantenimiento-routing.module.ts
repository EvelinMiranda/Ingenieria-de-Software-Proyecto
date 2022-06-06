import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoPage } from './mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoPageRoutingModule {}
