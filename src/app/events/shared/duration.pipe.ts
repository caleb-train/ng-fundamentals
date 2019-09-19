import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    switch (value) {
      case 1: return 'half hour'
      case 2: return 'full hour'
      case 3: return 'half day'
      case 4: return 'full day'
      default: return value.toString()
    }
  }
}