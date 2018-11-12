import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroesPure'
})
export class FlyingHeroesPurePipe implements PipeTransform {

  transform(allHeroes: any[]) {
    return allHeroes.filter(hero => hero.canFly);
  }


}
