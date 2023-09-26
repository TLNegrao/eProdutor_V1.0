import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFormat'
})
export class CpfFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (value === undefined || value === null) {
      return '';
    }
    const cleanedValue = value.replace(/[^\d]/g, '');
    if (cleanedValue.length === 11) {
      return `${cleanedValue.slice(0, 3)}.${cleanedValue.slice(3, 6)}.${cleanedValue.slice(6, 9)}-${cleanedValue.slice(9, 11)}`;
    }
    return cleanedValue;
  }

}
