import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myUpperCase'
})

export class CustomPipe implements PipeTransform {
    transform(value: string, args: string[]): string {
        if (!value) return value;

        return value.toUpperCase();
    }
}
