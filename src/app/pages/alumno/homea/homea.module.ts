import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeaPageRoutingModule } from './homea-routing.module';

import { HomeaPage } from './homea.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomeaPage]
})
export class HomeaPageModule {}
