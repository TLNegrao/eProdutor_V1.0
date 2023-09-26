import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mqhectares'
})
export class MqhectaresPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 10000) {
      const hectareValue = value / 10000;
      return `${hectareValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} hectare(s)`;
    } else {
      return `${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} m²`;
    }
  }

}
