import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceiraPageRoutingModule } from './terceira-routing.module';

import { TerceiraPage } from './terceira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceiraPageRoutingModule
  ],
  declarations: [TerceiraPage]
})
export class TerceiraPageModule {}
