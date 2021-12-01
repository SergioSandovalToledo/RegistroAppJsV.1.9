import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomedPage } from './homed.page';

const routes: Routes = [
  {
    path: '',
    component: HomedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomedPageRoutingModule {}
