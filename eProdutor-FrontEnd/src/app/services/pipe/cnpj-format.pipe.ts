import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjFormat'
})
export class CnpjFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (value === undefined || value === null) {
      return '';
    }
    const cleanedValue = value.replace(/[^\d]/g, '');
    if (cleanedValue.length === 14) {
      return `${cleanedValue.slice(0, 2)}.${cleanedValue.slice(2, 5)}.${cleanedValue.slice(5, 8)}/${cleanedValue.slice(8, 12)}-${cleanedValue.slice(12, 14)}`;
    }
    return cleanedValue;
  }

}
