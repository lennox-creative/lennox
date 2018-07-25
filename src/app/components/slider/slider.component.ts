import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IsMusicService } from '../../services/is-music.service';
import * as $ from 'jquery';
import 'bootstrap';
 
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @ViewChild('carousel') carousel: ElementRef; 
  public imagesAmount: number;
  private clickedOnce: boolean; 

  constructor(private isMusicService: IsMusicService) {}

  ngOnInit() {
    this.imagesAmount = environment.imagesAmount + 1;

    this.isMusicService.isMusic$.subscribe(res => {
      if (res) {
        this.clickedOnce = true;
      }
    });
  }

  setMusic(val: boolean) {
    if (!this.clickedOnce) {
      this.isMusicService.setIsMusic(val);
      $(this.carousel.nativeElement).carousel();
    }
  }

}
