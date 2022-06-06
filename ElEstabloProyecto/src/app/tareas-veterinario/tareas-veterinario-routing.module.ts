import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasVeterinarioPage } from './tareas-veterinario.page';

const routes: Routes = [
  {
    path: '',
    component: TareasVeterinarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasVeterinarioPageRoutingModule {}
