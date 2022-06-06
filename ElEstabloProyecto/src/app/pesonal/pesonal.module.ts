import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesonalPageRoutingModule } from './pesonal-routing.module';

import { PesonalPage } from './pesonal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesonalPageRoutingModule
  ],
  declarations: [PesonalPage]
})
export class PesonalPageModule {}
