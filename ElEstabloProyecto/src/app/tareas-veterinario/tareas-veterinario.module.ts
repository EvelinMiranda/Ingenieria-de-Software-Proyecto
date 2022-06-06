import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareasVeterinarioPageRoutingModule } from './tareas-veterinario-routing.module';

import { TareasVeterinarioPage } from './tareas-veterinario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareasVeterinarioPageRoutingModule
  ],
  declarations: [TareasVeterinarioPage]
})
export class TareasVeterinarioPageModule {}
