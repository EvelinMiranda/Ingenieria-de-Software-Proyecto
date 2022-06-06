import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduccionPage } from './produccion.page';

const routes: Routes = [
  {
    path: '',
    component: ProduccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduccionPageRoutingModule {}
