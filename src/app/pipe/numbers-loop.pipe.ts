import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersLoop'
})
export class NumbersLoopPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = [];
    for (let i = 1; i < value; i++) {
      res.push(i);
    }
    return res;
  }

}
