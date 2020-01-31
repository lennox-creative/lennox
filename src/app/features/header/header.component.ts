import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PlaygroundService } from 'src/app/core/is-music.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  titleText = environment.titleText;
  logoText = environment.logoText;
  isMusic = this.playgroundService.isMusic$.pipe(
    tap((isMusicOn) => {
      this.isMusicOn = isMusicOn;
    })
  );
  private isMusicOn: boolean;

  constructor(private playgroundService: PlaygroundService) { }

  setMusic(val: boolean) {
    if (this.isMusicOn !== val) {
      this.playgroundService.setIsMusic(val);
    }
  }

}
