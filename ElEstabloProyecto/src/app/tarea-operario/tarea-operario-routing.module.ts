import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareaOperarioPage } from './tarea-operario.page';

const routes: Routes = [
  {
    path: '',
    component: TareaOperarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaOperarioPageRoutingModule {}
