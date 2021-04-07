import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarPageRoutingModule } from './star-routing.module';

import { StarPage } from './star.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarPageRoutingModule
  ],
  declarations: [StarPage]
})
export class StarPageModule {}
