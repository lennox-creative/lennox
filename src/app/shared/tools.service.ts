import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  fillNumInArr(num: number): number[] {
    const result = [];

    for (let i = 1; i < num; i++) {
      result.push(i);
    }

    return result;
  }
}
