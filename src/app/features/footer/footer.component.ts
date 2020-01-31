import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PlaygroundService } from '../../core/is-music.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  @ViewChild('bgMusicRef') bgMusicRef: ElementRef;
  footerText: string;
  isMusic: boolean;
  isMusicOn: boolean;
  private isMusicSubscription: Subscription;

  constructor(private playgroundService: PlaygroundService) { }

  ngOnInit() {
    this.footerText = environment.footerText;
    this.isMusicSubscription = this.playgroundService.isMusic$.subscribe((isMusic: boolean) => {
      this.isMusic = isMusic;
      if (isMusic) {
        <HTMLAudioElement>this.bgMusicRef.nativeElement.play();
      }
    });
  }

  ngOnDestroy() {
    this.isMusicSubscription.unsubscribe();
  }

}