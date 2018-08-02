import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IsMusicService } from '../../services/is-music.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  @ViewChild('bgMusicRef') bgMusicRef: ElementRef;
  public footerText: string;
  public isMusic: boolean;ElementRef
  public isMusicOn: boolean;
  private isMusicSubscription: Subscription;

  constructor(private isMusicService: IsMusicService) { }

  ngOnInit() {
    this.footerText = environment.footerText;
    this.isMusicSubscription = this.isMusicService.isMusic$.subscribe((isMusic: boolean) => {
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