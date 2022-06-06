import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReproduccionPageRoutingModule } from './reproduccion-routing.module';

import { ReproduccionPage } from './reproduccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReproduccionPageRoutingModule
  ],
  declarations: [ReproduccionPage]
})
export class ReproduccionPageModule {}
