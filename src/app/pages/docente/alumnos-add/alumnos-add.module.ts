import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosAddPageRoutingModule } from './alumnos-add-routing.module';

import { AlumnosAddPage } from './alumnos-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosAddPageRoutingModule
  ],
  declarations: [AlumnosAddPage]
})
export class AlumnosAddPageModule {}
