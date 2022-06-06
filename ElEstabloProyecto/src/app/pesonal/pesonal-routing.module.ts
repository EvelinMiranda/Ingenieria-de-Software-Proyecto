import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesonalPage } from './pesonal.page';

const routes: Routes = [
  {
    path: '',
    component: PesonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesonalPageRoutingModule {}
