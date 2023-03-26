import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'health'
  })
  export class HealthPipe implements PipeTransform {
    transform(value: any) : string {
    //  console.log(typeof(value));
      if (value === 0) {
        return "Healthy";
      }
      if (value === 1) {
        return 'Moderate';
      }
      if (value === 2) {
        return 'Un-Healthy';
      }
      return "undefined";
    }
  }