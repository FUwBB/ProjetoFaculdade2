import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceiraPage } from './terceira.page';

const routes: Routes = [
  {
    path: '',
    component: TerceiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceiraPageRoutingModule {}
