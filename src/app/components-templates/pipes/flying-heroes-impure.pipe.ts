import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroesImpure'
})
export class FlyingHeroesImpurePipe implements PipeTransform {

  transform(allHeroes: any[]) {
    return allHeroes.filter(hero => hero.canFly);
  }

}
