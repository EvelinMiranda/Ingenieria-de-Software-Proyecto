import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarTareasPage } from './asignar-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarTareasPageRoutingModule {}
