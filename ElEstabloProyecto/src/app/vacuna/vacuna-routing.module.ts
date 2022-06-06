import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacunaPage } from './vacuna.page';

const routes: Routes = [
  {
    path: '',
    component: VacunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacunaPageRoutingModule {}
