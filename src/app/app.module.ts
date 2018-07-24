import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { NumbersLoopPipe } from './pipe/numbers-loop.pipe';
import { IsMusicService } from './services/is-music.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    NumbersLoopPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [IsMusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
