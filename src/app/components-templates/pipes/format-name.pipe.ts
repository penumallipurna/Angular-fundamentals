import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: string, first_word: string, second_word: string): string {
    let name = value.split(' ');
    let positions = {
      'first': 0,
      'middle': 1,
      'last': 2
    };

    return `${ name[positions[first_word]] } ${ name[positions[second_word]] }`; 
  }


}
