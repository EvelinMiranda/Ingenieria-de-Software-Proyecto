import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoPageRoutingModule } from './mantenimiento-routing.module';

import { MantenimientoPage } from './mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoPageRoutingModule
  ],
  declarations: [MantenimientoPage]
})
export class MantenimientoPageModule {}
