import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateblogPage } from './createblog.page';

const routes: Routes = [
  {
    path: '',
    component: CreateblogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateblogPageRoutingModule {}
