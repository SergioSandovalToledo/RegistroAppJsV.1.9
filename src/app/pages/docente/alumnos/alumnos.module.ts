import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosPageRoutingModule } from './alumnos-routing.module';

import { AlumnosPage } from './alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AlumnosPage]
})
export class AlumnosPageModule {}
