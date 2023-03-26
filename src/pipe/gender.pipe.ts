import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'gender'
  })
  export class GenderPipe implements PipeTransform {
    transform(value: any) : string {
    //  console.log(typeof(value));
      if (value === 0) {
        return "Male";
      }
      if (value === 1) {
        return 'Female';
      }
      return "undefined";
    }
  }