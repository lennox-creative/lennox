import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlaygroundService {
  private _music = new BehaviorSubject<boolean>(false);

  get isMusic$() {
    return this._music.asObservable();
  }
  
  setIsMusic(isMusic: boolean) {
    this._music.next(isMusic);
  }

}
