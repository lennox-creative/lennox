import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IsMusicService } from '../../services/is-music.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logoText: string;
  public titleText: string;
  public isMusic: boolean;
  private clickedOnce: boolean;

  constructor(private isMusicService: IsMusicService) { }

  ngOnInit() {
    this.logoText = environment.logoText;
    this.titleText = environment.titleText;

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
