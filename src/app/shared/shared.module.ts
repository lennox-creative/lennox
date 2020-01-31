import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../features/header/header.component';
import { SliderComponent } from '../features/slider/slider.component';
import { FooterComponent } from '../features/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SliderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
