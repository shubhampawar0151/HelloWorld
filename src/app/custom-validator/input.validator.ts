import { AbstractControl } from '@angular/forms';

export function inputValidator(control: AbstractControl): { [key: string]: boolean } | null {
  console.log("Input validation function called :: ",control.value);
  if (control.value > 0) {
    return { 'value': true };
  }else{
    return {'value': false};
  }
  
}