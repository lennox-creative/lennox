import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IsMusicService } from '../../services/is-music.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public titleText: string;
  public isMusic: boolean;
  private clickedOnce: boolean;
  public logoText: string;

  constructor(private isMusicService: IsMusicService) { }

  ngOnInit() {
    this.titleText = environment.titleText;
    this.logoText = environment.logoText;

    this.isMusicService.isMusic$.subscribe(res => {
      this.isMusic = res;
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
