import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarPage } from './star.page';

const routes: Routes = [
  {
    path: '',
    component: StarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarPageRoutingModule {}
