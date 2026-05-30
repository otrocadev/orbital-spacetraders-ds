import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stFormat',
})
export class StFormatPipe implements PipeTransform {
  transform(value: number | string, prefix = '', suffix = ''): string {
    const formatted = typeof value === 'number' ? value.toLocaleString('en-US') : String(value);
    return `${prefix}${formatted}${suffix}`;
  }
}
