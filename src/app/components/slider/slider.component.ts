import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IsMusicService } from '../../services/is-music.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
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
    }
  }

}
