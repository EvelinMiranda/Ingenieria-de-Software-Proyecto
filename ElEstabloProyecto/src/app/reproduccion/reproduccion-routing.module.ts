import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReproduccionPage } from './reproduccion.page';

const routes: Routes = [
  {
    path: '',
    component: ReproduccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReproduccionPageRoutingModule {}
