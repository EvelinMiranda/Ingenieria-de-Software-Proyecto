import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarTareasPageRoutingModule } from './asignar-tareas-routing.module';

import { AsignarTareasPage } from './asignar-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarTareasPageRoutingModule
  ],
  declarations: [AsignarTareasPage]
})
export class AsignarTareasPageModule {}
