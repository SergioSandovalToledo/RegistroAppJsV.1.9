import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [
    CabeceraComponent,
    PieDePaginaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CabeceraComponent,
    PieDePaginaComponent
  ]
})
export class ComponentsModule { }
