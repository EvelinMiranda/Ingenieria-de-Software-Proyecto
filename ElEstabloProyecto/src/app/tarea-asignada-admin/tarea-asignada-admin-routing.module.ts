import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareaAsignadaAdminPage } from './tarea-asignada-admin.page';

const routes: Routes = [
  {
    path: '',
    component: TareaAsignadaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaAsignadaAdminPageRoutingModule {}
