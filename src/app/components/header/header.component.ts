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

  constructor(private isMusicService: IsMusicService) { }

  ngOnInit() {
    this.logoText = environment.logoText;
    this.titleText = environment.titleText;
  }

  setMusic(val: boolean) {
    this.isMusicService.setIsMusic(val);
  }

}
