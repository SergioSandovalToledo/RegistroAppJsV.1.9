import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosAddPage } from './alumnos-add.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosAddPageRoutingModule {}
