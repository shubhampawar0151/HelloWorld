import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'source'
  })
  export class SourcePipe implements PipeTransform {
    transform(value: any) : string {
    //  console.log(typeof(value));
      if (value === 0) {
        return "Out";
      }
      if (value === 1) {
        return 'In';
      }
      return "undefined";
    }
  }