import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaAsignadaAdminPageRoutingModule } from './tarea-asignada-admin-routing.module';

import { TareaAsignadaAdminPage } from './tarea-asignada-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaAsignadaAdminPageRoutingModule
  ],
  declarations: [TareaAsignadaAdminPage]
})
export class TareaAsignadaAdminPageModule {}
