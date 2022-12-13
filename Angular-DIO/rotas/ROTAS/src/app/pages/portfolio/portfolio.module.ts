import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TitleComponent } from '../index/title/title.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
