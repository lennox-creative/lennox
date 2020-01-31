import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PlaygroundService } from '../../core/is-music.service';
import * as $ from 'jquery';
import 'bootstrap';
import { Subscription } from 'rxjs';
import { ToolsService } from 'src/app/core/core.module';
 
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit, OnDestroy {
  @ViewChild('carousel') carousel: ElementRef; 
  keys = this.toolsService.fillNumInArr(environment.imagesAmount + 1);
  private playgroundServiceSubscription: Subscription;
  private isMusicOn: boolean; 

  constructor(private playgroundService: PlaygroundService, private toolsService: ToolsService) {}

  ngOnInit() {
    this.playgroundService.isMusic$.subscribe(isMusicOn => {
      if (isMusicOn) {
        this.isMusicOn = true;
        // TODO: use angular nativ module like material or ng-bootstrap
        $(this.carousel.nativeElement).carousel();
      }
    });
  }



  setMusic(val: boolean) {
    if (this.isMusicOn !== val) {
      this.playgroundService.setIsMusic(val);
    }
  }

  ngOnDestroy() {
    this.playgroundServiceSubscription.unsubscribe();
  }

}
