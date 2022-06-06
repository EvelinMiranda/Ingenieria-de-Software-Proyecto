import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunaPageRoutingModule } from './vacuna-routing.module';

import { VacunaPage } from './vacuna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunaPageRoutingModule
  ],
  declarations: [VacunaPage]
})
export class VacunaPageModule {}
