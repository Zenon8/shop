import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipePipe implements PipeTransform {

  transform(arr: Array<any>, field?: string, order?: boolean): Array<any> {
    console.log(`Sort by ${field}`);
    let result = 0;
    return arr.sort((a, b) => {
      if (a[field] > b[field]) {
        result = 1;
      }
      if (a[field] < b[field]) {
        result = -1;
      }
      return order ? result : -result;
    });
  }
}
