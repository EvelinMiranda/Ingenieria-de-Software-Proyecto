import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaOperarioPageRoutingModule } from './tarea-operario-routing.module';

import { TareaOperarioPage } from './tarea-operario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaOperarioPageRoutingModule
  ],
  declarations: [TareaOperarioPage]
})
export class TareaOperarioPageModule {}
